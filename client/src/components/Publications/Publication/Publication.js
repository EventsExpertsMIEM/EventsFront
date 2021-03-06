import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEvent, getPresenters, joinEvent, relationToEvent,
} from '../../../actions';

const Event = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [relToEvent, setRelToEvent] = useState();
  // eslint-disable-next-line react/prop-types,react/destructuring-assignment
  const { id = window.location.pathname.match(/\d+/g)[0] } = props.match.params;
  const events = useSelector((store) => store.events);
  const event = events[id];

  const getCurrentEvent = async () => {
    const data = await dispatch(getEvent(id));
    if (data && data.part) {
      setRelToEvent(data.part);
    }
    await dispatch(getPresenters(id));
  };

  useEffect(() => {
    getCurrentEvent();
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
    presenters,
  } = event;

  const onJoinClick = () => {
    dispatch(joinEvent(id));
    getCurrentEvent();
  };

  const onSetupEvent = () => {
    history.push('/profile/admin-panel');
  };

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
              <a href={site_link} className="btn btn-primary mb-2">{site_link}</a>
              <div>{creator_email}</div>
              <div>{phone || 123}</div>
            </div>
            {presenters && presenters.length > 0 && (
            <div className="col-lg-6">
              <h6>Докладчики:</h6>
              <ul className="list-group">
                {presenters.map((presenter) => (
                  <li
                    key={presenter}
                    className="list-group-item"
                  >
                    {presenter}
                  </li>
                ))}
              </ul>
            </div>
            )}
            <div className="col-lg-6">
              {relToEvent === relationToEvent['not joined'] && (
                <button type="button" className="btn btn-outline-primary mb-2" onClick={onJoinClick}>
                  Присоединиться к мероприятию
                </button>
              )}
              {(relToEvent === relationToEvent.creator
                                || relToEvent === relationToEvent.manager) && (
                                <button type="button" className="btn btn-outline-primary mb-2" onClick={onSetupEvent}>
                                  Настройка мероприятия
                                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
