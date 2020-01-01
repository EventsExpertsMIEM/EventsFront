import React from "react";

const LogIn = () => (
    <div className="tab-pane show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
        <div className="form-group">
            <input type="email" className="form-control" id="inputEmail1"
                   placeholder="Адрес электронной почты" />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" id="inputPassword1" placeholder="Пароль" />
        </div>
        <div className="form-row text-center">
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Вход</button>
                <div className="alert alert-danger" role="alert" style={{"display": "none"}}>
                    Неверное имя пользователя или пароль
                </div>
            </div>
        </div>
    </div>
);

export default LogIn;
