import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventData, fetchEvents } from '../../actions';

const MainPage = () => {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const [items, setItems] = useState(10);
  const [pending, setPending] = useState(true);
  const onClick = () => {
    setItems((itemsCount) => itemsCount + 10);
  };
  const onLinkClick = (id) => dispatch(fetchEventData(id));

  useEffect(() => {
    (async () => {
      const res = await dispatch(fetchEvents());
      if (Object.values(res.payload).length === 0) {
        setPending(false);
      }
    })();
  }, [dispatch]);

  if (pending) {
    return <div className="text-center">Загрузка...</div>;
  }

  if (Object.values(events).length === 0) {
    return <div className="text-center">Ничего не найдено</div>;
  }

  return (
    <div className="container">
      {Object.values(events).slice(0, items).map(({
        // eslint-disable-next-line camelcase
        name, date_time, id, sm_description,
      }) => (
        <div className="card mb-3" key={id}>
          <div className="row no-gutters d-flex flex-wrap align-items-center">
            <div className="col-md-2">
              <img src={`${process.env.PUBLIC_URL}/bot1.jpeg`} className="card-img" alt="event 1" />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {/* eslint-disable-next-line camelcase */}
                <p className="card-text">{sm_description}</p>
                <Link
                  to={`/info/${id}`}
                  className="card-link btn btn-outline-primary"
                  onClick={() => onLinkClick(id)}
                >
                  Подробности
                </Link>
                <Link to="/" href="/" className="card-link btn btn-outline-primary">Сайт мероприятия</Link>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {
                                        new Date(date_time).toLocaleString(navigator.language, {
                                          year: 'numeric',
                                          month: 'long',
                                          day: 'numeric',
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          hour12: false,
                                        })
                                    }
                  </li>
                  <li className="list-group-item">Москва, Крокус Сити Холл</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link to="/" href="/" className="badge badge-primary">Робототехника</Link>
                <Link to="/" href="/" className="badge badge-primary">Программирование МК</Link>
                <Link to="/" href="/" className="badge badge-primary">Видеотехнологии</Link>
                <Link to="/" href="/" className="badge badge-primary">Искуственный интеллект</Link>
                <Link to="/" href="/" className="badge badge-primary">Распознавание речи</Link>
                <Link to="/" href="/" className="badge badge-primary">Распознавание изображений</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {items <= Object.values(events).length
            && <button type="button" className="btn btn-dark" onClick={onClick}>Загрузить еще</button>}
    </div>
  );
};

export default MainPage;