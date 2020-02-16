import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventData, fetchEvents, joinEvent } from '../../actions';

const Info = () => {
  const dispatch = useDispatch();
  const mail = useSelector((store) => store.user && store.user.mail);
  const eventId = document.location.pathname.split('/').pop();
  const data = useSelector((store) => store.events && store.events[eventId]);

  useEffect(() => {
    if (!data) {
      dispatch(fetchEvents());
    }
    dispatch(fetchEventData(eventId));
  }, [dispatch]);

  const onClick = () => dispatch(joinEvent({ mail, event_id: eventId }));

  if (!data) {
    return (
      <div className="text-center">
        Загрузка...
      </div>
    );
  }
  return (
    <div className="container">
      <div className="card mb-3">
        <img src={`${process.env.PUBLIC_URL}/bot2.jpeg`} className="card-img-top" alt="event 2" />
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p className="card-text">{data.sm_description}</p>
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-lg-3">
              <h4>
                Дата проведения:
              </h4>
              <p>
                {new Date(data.date_time).toLocaleString(navigator.language, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
                })}
              </p>
            </div>
            <div className="col-lg-3">
              <h4>
                Место:
              </h4>
              <p>Москва, Крокус Сити Холл</p>
            </div>
            <div className="col-lg-6">
              <Link to="/" href="/" className="badge badge-primary">Робототехника</Link>
              <Link to="/" href="/" className="badge badge-primary">Программирование МК</Link>
              <Link to="/" href="/" className="badge badge-primary">Видеотехнологии</Link>
              <Link to="/" href="/" className="badge badge-primary">Искуственный интеллект</Link>
              <Link to="/" href="/" className="badge badge-primary">Распознавание речи</Link>
              <Link to="/" href="/" className="badge badge-primary">Распознавание изображений</Link>
            </div>
            <div className="col-lg-6">
              <Link to="/" href="/" className="btn btn-primary mb-2">Сайт мероприятия</Link>
            </div>
            <div className="col-lg-6">
              <button type="button" className="btn btn-outline-primary mb-2" onClick={onClick}>
                Присоединиться к мероприятию
              </button>
            </div>
          </div>
          <h4>Описание:</h4>
          <p className="card-text">{data.description}</p>
          <h4>Создатель мероприятия:</h4>
          <p>{`${data.creator_name} ${data.creator_surname}`}</p>
          <h4>Контактные данные:</h4>
          <div>{data.creator_mail}</div>
          <div>{data.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
