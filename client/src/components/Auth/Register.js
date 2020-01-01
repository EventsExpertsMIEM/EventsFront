import React from "react";

const Register = () => (
    <div className="tab-pane show active" id="nav-register" role="tabpanel"
         aria-labelledby="nav-register-tab">
        <div className="form-group">
            <input type="email" className="form-control" id="inputEmail2"
                   placeholder="Адрес электронной почты" required />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" id="inputPassword2" placeholder="Пароль"
                   required />
            <div className="help-block">Минимум 6 символов</div>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" id="passwordConfirm"
                   placeholder="Подтверждение пароля" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="inputFIO" placeholder="ФИО" required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="inputOrg" placeholder="Организация"
                   required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="inputPos" placeholder="Должность"
                   required />
        </div>
        <div className="form-row text-center">
            <div className="col-12">
                <button type="submit" className="btn btn-primary" data-toggle="modal"
                        data-target="#successful_register_modal">Регистрация
                </button>
            </div>
        </div>
    </div>
)

export default Register;
