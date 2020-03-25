import React from 'react';
import { useSelector } from 'react-redux';

const PersonalInfo = () => {
  const { mail } = useSelector((store) => store.user);
  return (
    <form id="personal-info">
      <div
        className="tab-pane show active"
        id="personal-info-tab"
        role="tabpanel"
        aria-labelledby="nav-personal-tab"
      >
        <p>{mail}</p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="userOrg"
            placeholder="МФТИ"
            form="personal-info"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="userPos"
            placeholder="Старший научный сотрудник"
            form="personal-info"
            required
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-seconadary">Сохранить</button>
          {/* <div className="alert alert-success" role="alert">
                        Данные о месте работы и должности сохранены
                    </div> */}
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;