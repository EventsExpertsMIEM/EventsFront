import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchEvents} from "../../actions";

const MainPage = () => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    const onClick = () => dispatch(fetchEvents());

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch]);

    return (
        <div className="container">
            {Object.values(data).map(({name, date, id, sm_description}) => (
                <div className="card mb-3" key={id}>
                    <div className="row no-gutters d-flex flex-wrap align-items-center">
                        <div className="col-md-2">
                            <img src={`${process.env.PUBLIC_URL}/bot1.jpeg`} className="card-img" alt="event 1" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{sm_description}</p>
                                <Link to="/info" className="card-link btn btn-outline-primary">Подробности</Link>
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
            <button type="button" className="btn btn-dark"
                    onClick={onClick}>Загрузить еще
            </button>
        </div>
    );
};

export default MainPage;
