/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserLoginStatus, getAllEvents, getUserInfo, getAllTags, getCurrentUserInfo,
} from '../../actions';
import { formatDetailedDateTime } from '../../helpers/helpers';
import radixSort from '../../helpers/radixSort';

const Events = () => {
  const events = useSelector((store) => store.events);
  const user = useSelector((store) => store.user);
  const [length, setLength] = useState(10);
  const [query, setQuery] = useState('');
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const onClick = async () => {
    await dispatch(getAllEvents());
    setLength(length + 10);
  };

  const handleChange = (e) => setQuery(e.target.value.trim().toLowerCase());

  useEffect(() => {
    (async () => {
      await dispatch(getAllEvents());
      // await dispatch(getAllTags());
      setPending(false);
      try {
        await dispatch(getUserLoginStatus());
        // TODO: return
        // await dispatch(getCurrentUserInfo());
      } catch (err) {
        console.log('unauthorized');
      }
    })();
  }, [dispatch, user.isLoggedIn]);

  if (pending) {
    return <h1 className="text-center">Загрузка...</h1>;
  }

  if (Object.values(events).length < 1) {
    return (
      <div className="text-center">
        <h1>Ничего не найдено</h1>
      </div>
    );
  }

  const formattedQuestions = radixSort(Object.values(events), 'id', false)
    .filter((question) => question.name && question.name.toLowerCase().indexOf(query) > -1)
    .slice(0, length);
  return (
    <div className="container">
      <input
        className="form-control m-3"
        type="search"
        placeholder="Поиск по названиям мероприятий"
        aria-label="Search"
        onChange={handleChange}
      />
      <div className="container">
        <div className="row">
          {formattedQuestions.map((question) => {
            const {
              end_date,
              id,
              location,
              name,
              site_link,
              sm_description,
              start_date,
              start_time,
            } = question;

            return (

              <div className="card mt-3 mx-auto" style={{ width: '30rem' }} key={id}>
                <div className="card-body pb-0">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    {sm_description}
                  </p>
                  <Link
                    to={{
                      pathname: `/events/${id}`,
                      state: events,
                    }}
                    className="card-link"
                  >
                    Подробности
                  </Link>
                </div>
                <div className="pt-auto">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{start_date}</li>
                    <li className="list-group-item">{end_date}</li>
                    <li className="list-group-item">{start_time}</li>
                    <li className="list-group-item">{location}</li>
                    <a className="list-group-item" href={site_link}>{site_link}</a>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {!query && (length < Object.values(events).length)
            && (
            <button
              type="button"
              className="btn btn-dark mb-5"
              onClick={onClick}
            >
              Загрузить еще
            </button>
            )}
      {formattedQuestions.length === 0 && <div className="text-center">Ничего не найдено</div>}
    </div>
  );
};

export default Events;
