import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../../../actions';

const Event = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id || window.location.pathname.match(/\d+/g)[0];
  const events = useSelector((store) => store.events);
  const event = events[id];

  useEffect(() => {
    (async () => {
      await dispatch(getEvent(id));
    })();
  }, [dispatch, id]);

  if (!event) {
    return (
      <div className="text-center">
        Загрузка...
      </div>
    );
  }

  const {
    additional_info,
    creator_email,
    description,
    end_date,
    location,
    name,
    phone,
    site_link,
    sm_description,
    start_date,
    start_time,
  } = event;

  return (
    <div className="container">
      <div className="card mb-3">
        <img src={`${process.env.PUBLIC_URL}/bot2.jpeg`} className="card-img-top" alt="event 2" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{sm_description}</p>
          <p className="card-text">{description}</p>
          {additional_info && <p>{additional_info}</p>}
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-lg-3">
              <h4>
                Дата начала:
              </h4>
              <p>{start_date}</p>
              <h4>
                Дата окончания:
              </h4>
              <p>{end_date}</p>
              <h4>
                Время окончания:
              </h4>
              <p>{start_time}</p>
            </div>
            <div className="col-lg-3">
              <h4>Место:</h4>
              <p>{location}</p>
            </div>
            <div className="col-lg-6">
              <Link to={site_link} className="btn btn-primary mb-2">Сайт мероприятия</Link>
              <div>{creator_email}</div>
              <div>{phone || 123}</div>
            </div>
            <div className="col-lg-6">
              <button type="button" className="btn btn-outline-primary mb-2">
                Присоединиться к мероприятию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
