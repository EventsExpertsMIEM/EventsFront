/* eslint-disable react/prop-types, react/destructuring-assignment */
import React, { Fragment } from 'react';

const PersonalInfo = (props) => {
  const {
    email,
    id,
    name,
    surname,
    service_status,
    phone,
    organization,
    position,
    country,
    town,
    sex,
    birth,
    bio,
  } = props.user;

  const MAP = {
    Имя: name,
    Фамилия: surname,
    'Электронная почта': email,
    ИД: id,
    Статус: service_status,
    Телефон: phone,
    Организация: organization,
    Должность: position,
    Страна: country,
    Город: town,
    Пол: sex,
    'Дата рождения': birth,
    Биограния: bio,
  };

  const format = (value) => {
    const isArray = Array.isArray(value);
    if (value === undefined || (isArray && !value.length)) {
      return '—';
    }

    if (isArray) {
      return value.join(', ');
    }
    return value;
  };

  return (
    <form id="personal-info">
      <div
        className="tab-pane fade show active text-center mt-3"
        id="personal-info-tab"
        role="tabpanel"
        aria-labelledby="nav-personal-tab"
      >
        <img
          alt="User Pic"
          src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
          id="profile-image1"
          className="img-fluid rounded"
          style={{ width: '15rem' }}
        />
        <dl>
          {Object.entries(MAP).map(([key, value]) => (
            (
              value && (
              <Fragment key={key}>
                <dt>{key}</dt>
                <dd>{format(value)}</dd>
              </Fragment>
              )
            )
          ))}
        </dl>
      </div>
    </form>
  );
};

export default PersonalInfo;
