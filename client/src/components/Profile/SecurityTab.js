import React from "react";

const SecurityTab = () => (
    <div className="tab-pane show active" id="security-tab" role="tabpanel" aria-labelledby="nav-security-tab">
        <form>
            <p>Смена пароля</p>
            <div className="form-group">
                <input className="form-control" name="password" type="password" placeholder="Текущий пароль" />
            </div>
            <div className="form-group">
                <input className="form-control" name="newPassword" type="password" placeholder="Новый пароль" />
            </div>
            <div className="form-group">
                <input className="form-control" name="newPassword" type="password"
                       placeholder="Новый пароль еще раз" />
            </div>
            <div className="form-group text-center">
                <button type="submit" className="btn btn-seconadary">Сохранить</button>
                <div className="alert alert-success" role="alert">
                    Новый пароль сохранен
                </div>
            </div>
        </form>
    </div>
);

export default SecurityTab;
