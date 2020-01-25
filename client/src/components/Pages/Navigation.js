import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../actions";

const Navigation = () => {
    const signIn = useSelector(store => store.user.signIn);
    const dispatch = useDispatch();
    const onClick = () => dispatch(signOut());

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-target="#navbarMenu"
                    aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Главная</Link>
                    </li>
                    {signIn &&
                    <li className="nav-item active disabled">
                        <Link to="/profile" className="nav-link">Личный кабинет</Link>
                    </li>}
                </ul>
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/auth/sigin" className="nav-link" onClick={signIn ? onClick : undefined}>
                        {signIn ? 'Выход' : 'Вход'}
                    </Link>
                </li>
                {!signIn && <li className="nav-item">
                    <Link to="/auth/signup" className="nav-link">Регистрация</Link>
                </li>}
            </ul>
        </nav>
    );
}

export default Navigation;
