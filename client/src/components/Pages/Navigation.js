import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {testAction} from "../../actions";

const Navigation = () => {
    const test = useSelector(state => state.test);
    const dispatch = useDispatch();
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                    aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link"
                              onClick={(e) => {
                                  dispatch(testAction(e.target.textContent.toUpperCase()))
                              }}>{test || 'Главная'}</Link>
                    </li>
                    <li className="nav-item active disabled">
                        <Link to="/profile" className="nav-link">Личный кабинет</Link>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/auth" className="nav-link">Выход</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
