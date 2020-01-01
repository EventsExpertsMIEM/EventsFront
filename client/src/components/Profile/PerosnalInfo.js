import React from "react";

const PersonalInfo = () => (
    <div className="tab-pane show active" id="personal-info-tab" role="tabpanel"
         aria-labelledby="nav-personal-tab">
        <p>iivanov@mail.ru</p>
        <div className="form-group">
            <input type="text" className="form-control" id="userOrg" placeholder="МИЭМ НИУ ВШЭ"
                   required />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="userPos"
                   placeholder="Старший научный сотрудник"
                   required />
        </div>
        <div className="form-group text-center">
            <button type="submit" className="btn btn-seconadary">Сохранить</button>
            <div className="alert alert-success" role="alert">
                Данные о месте работы и должности сохранены
            </div>
        </div>
    </div>
);

export default PersonalInfo;
