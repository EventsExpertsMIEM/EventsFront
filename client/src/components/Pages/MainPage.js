import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAction} from "../../actions";

const MainPage = () => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    return (
        <div className="container">
            {data.map(({url, title}, i) => (
                <div className="card mb-3" key={i}>
                    <div className="row no-gutters d-flex flex-wrap align-items-center">
                        <div className="col-md-2">
                            <img src={url} className="card-img" alt="event 1" />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">V ежегодная конференция для ботоводов-любителей и
                                    профессионалов
                                    пройдет в
                                    этом
                                    году при поддержке крупнейших российских IT компаний. Приглашаем вас принять участие
                                    и
                                    заслушать
                                    доклады разработчиков и руководителей.</p>
                                <Link to="/info" className="card-link btn btn-outline-primary">Подробности</Link>
                                <Link to="" className="card-link btn btn-outline-primary">Сайт мероприятия</Link>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">16 января 2020</li>
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
                    onClick={() => dispatch(fetchAction(Math.round(Math.random() * 5000)))}>Загрузить еще
            </button>
        </div>
    );
};

export default MainPage;
