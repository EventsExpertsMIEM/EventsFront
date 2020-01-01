import React from "react";
import {Link} from "react-router-dom";

const Info = () => (
    <div className="container">
        <div className="card mb-3">
            <img src={`${process.env.PUBLIC_URL}/bot2.jpeg`} className="card-img-top" alt="event 2" />
            <div className="card-body">
                <h2 className="card-title">V ежегодная конференция ботоводов</h2>
                <p className="card-text">V ежегодная конференция для ботоводов-любителей и профессионалов пройдет в этом
                    году при поддержке крупнейших российских IT компаний. Приглашаем вас принять участие и заслушать
                    доклады разработчиков и руководителей.</p>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-lg-3">
                        <h4>
                            Даты проведения:
                        </h4>
                        <p>30 января - 3 февраля 2020</p>
                    </div>
                    <div className="col-lg-3">
                        <h4>
                            Место:
                        </h4>
                        <p>Москва, Крокус Сити Холл</p>
                    </div>
                    <div className="col-lg-6">
                        <Link to='#' className="badge badge-primary">Робототехника</Link>
                        <Link to='#' className="badge badge-primary">Программирование МК</Link>
                        <Link to='#' className="badge badge-primary">Видеотехнологии</Link>
                        <Link to='#' className="badge badge-primary">Искуственный интеллект</Link>
                        <Link to='#' className="badge badge-primary">Распознавание речи</Link>
                        <Link to='#' className="badge badge-primary">Распознавание изображений</Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to='#' className="btn btn-primary mb-2">Сайт мероприятия</Link>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className="btn btn-outline-primary mb-2">Регистрация для участников
                        </button>
                    </div>
                </div>
                <p className="card-text">
                    Suspendisse in posuere lorem. Fusce eget eros ex. Curabitur nisi turpis, consequat id faucibus
                    vitae, viverra vel tortor. Aliquam erat volutpat. Pellentesque arcu nisi, pretium eu viverra a,
                    feugiat sed magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque risus
                    nunc, convallis eleifend erat feugiat, consectetur condimentum neque. Praesent ut purus a nisl
                    sagittis luctus ultricies eu nisl. Mauris dolor arcu, mattis eu metus vitae, lobortis laoreet
                    lectus. Vestibulum et rhoncus dolor, et rutrum lectus. Nunc vulputate felis ac maximus aliquet. Ut
                    varius justo orci, sit amet mollis sapien placerat ac. Sed efficitur sapien vel tristique sagittis.
                    Proin dapibus sed nunc et commodo. Sed nec diam non quam posuere venenatis et ut massa. Curabitur
                    blandit quam ex, non commodo mi tincidunt eget. Pellentesque a tincidunt elit. Phasellus sodales ac
                    nisi id commodo. Vestibulum ac sollicitudin est. Pellentesque in mattis dolor, ac condimentum justo.
                    Etiam tincidunt placerat leo sit amet fringilla. Etiam a neque at tortor varius sodales.
                    Pellentesque volutpat nulla sed augue laoreet convallis. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <h4>
                    Дополнительная информация:
                </h4>
                <p>
                    Для гостей, прибывающих из других городов, мы организуем трансфер от вокзала (арэропорта) до
                    гостиницы. Для получения услуги, пожалуйста, отметьте соответствующий пункт в регистрационной
                    анкете.
                </p>
            </div>
        </div>
    </div>
);

export default Info;
