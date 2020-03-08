import React from 'react';
import {
  Link, Redirect, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import EventsTabs from './EventsTabs';
import ProfileTabs from './ProfileTabs';
import requireAuth from '../requireAuth';

const getTabs = () => [
  {
    tabUrl: 'personal-info-tab',
    info: 'Персональная информация',
    component: ProfileTabs.PersonalInfo,
  },
  {
    tabUrl: 'personal-education-tab',
    info: 'Данные об образовании',
    component: ProfileTabs.PersonalEducation,
  },
  {
    tabUrl: 'security-tab',
    info: 'Настройки безопасности',
    component: ProfileTabs.SecurityTab,
  },
  {
    tabUrl: 'create-event',
    info: 'Создать событие',
    component: ProfileTabs.Events,
  },
  {
    tabUrl: 'participation',
    info: 'Учавствую',
    component: EventsTabs.Participation,
  },
  {
    tabUrl: 'speaking',
    info: 'Выступаю',
    component: EventsTabs.Speaking,
  },
  {
    tabUrl: 'organization',
    info: 'Организую',
    component: EventsTabs.Organization,
  }];

const Profile = () => {
  const { path, url } = useRouteMatch();
  // eslint-disable-next-line no-unused-vars
  const { name, surname, email } = useSelector((store) => store.user);
  const signIn = useSelector((store) => store.user.signIn);

  const tabs = getTabs();

  return (
    <div className="container">
      <div className="row d-flex flex-wrap align-items-center">
        <div className="col-lg-4">
          <img
            alt="User Pic"
            src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
            id="profile-image1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-8">
          <h4>{name && surname ? `${name} ${surname}` : 'Placeholder Placeholder'}</h4>
          <p className="font-weight-bold">МИЭМ НИУ ВШЭ</p>
          <p className="font-italic">Старший научный сотрудник</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <nav className="nav flex-column">
            {tabs.map(({ tabUrl, info }) => (
              <Link
                key={tabUrl}
                className="nav-link active"
                role="tab"
                to={`${url}/${tabUrl}`}
              >
                {info}
              </Link>
            ))}
          </nav>
        </div>
        <div className="col-lg-8">
          <div className="tab-content">
            <Switch>
              <Route
                path={`${path}`}
                exact
                render={() => <Redirect to={signIn ? `${path}/personal-info-tab` : '/'} />}
              />
              {tabs.map(({ tabUrl, component }) => (
                <Route
                  key={tabUrl}
                  exact
                  path={`${path}/${tabUrl}`}
                  component={component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default requireAuth(Profile);
