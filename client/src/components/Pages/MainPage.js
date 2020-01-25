import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchEventData, fetchEvents} from "../../actions";

const MainPage = () => {
    const events = useSelector(store => store.events);
    const dispatch = useDispatch();
    const onClick = () => {
        setItems((items) => items + 10)
    };
    const onLinkClick = (id) => dispatch(fetchEventData(id));
    const [items, setItems] = useState(10);

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch]);

    if (Object.values(events).length === 0) {
        return <div className="text-center">Загрузка...</div>
    }

    return (
        <div className="container">
            {Object.values(events).slice(0, items).map(({name, date, id, sm_description}) => (
                <div className="card mb-3" key={id}>
                    <div className="row no-gutters d-flex flex-wrap align-items-center">
                        <div className="col-md-2">
                            <img src={`${process.env.PUBLIC_URL}/bot1.jpeg`} className="card-img" alt="event 1" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{sm_description}</p>
                                <Link to={`/info/${id}`}
                                      className="card-link btn btn-outline-primary"
                                      onClick={() => onLinkClick(id)}>Подробности</Link>
                                <Link to="" className="card-link btn btn-outline-primary">Сайт мероприятия</Link>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{date}</li>
                                    <li className="list-group-item">Москва, Крокус Сити Холл</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="badge badge-primary">Робототехника</Link>
                                <Link to="#" className="badge badge-primary">Программирование МК</Link>
                                <Link to="#" className="badge badge-primary">Видеотехнологии</Link>
                                <Link to="#" className="badge badge-primary">Искуственный интеллект</Link>
                                <Link to="#" className="badge badge-primary">Распознавание речи</Link>
                                <Link to="#" className="badge badge-primary">Распознавание изображений</Link>
                            </div>
                        </div>
                    </div>
                </div>))}
            {items <= Object.values(events).length &&
            <button type="button" className="btn btn-dark" onClick={onClick}>Загрузить еще</button>}
        </div>
    );
};

export default MainPage;
