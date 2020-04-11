/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Link, Redirect, Route, useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from 'redux-form';
import ProfileTabs from './Management';
import { getCurrentUserInfo, ROLES } from '../../../actions';
import requireAuth from '../../HOCs/requireAuth';
import { FIELD_NAMES } from '../../../helpers/consts';
import CreateTask from './Management/CreateTask';

const getTabs = ({
  dispatch, currentUserData,
}) => [
  {
    tabUrl: '',
    info: '',
    component: () => <Redirect to="profile/personal-info" />,
  },
  {
    tabUrl: 'personal-info',
    info: 'Персональная информация',
    component: ProfileTabs.ProfileData,
  },
  {
    tabUrl: 'security',
    info: 'Настройки безопасности',
    component: ProfileTabs.SecurityTab,
  },
  {
    tabUrl: 'edit-personal-data',
    info: 'Редактировать профиль',
    component: ProfileTabs.EditProfileData,
    onClick: () => dispatch(initialize(FIELD_NAMES.PROFILE, currentUserData)),
  },
  {
    tabUrl: 'admin-panel',
    info: 'Панель администратора',
    component: ProfileTabs.AdminPanel,
    renderCondition: (props) => {
      const { service_status } = props.user;
      return service_status === ROLES.SUPERADMIN || service_status === ROLES.ADMIN;
    },
  },
  {
    tabUrl: 'tasks',
    info: 'Задачи',
    component: ProfileTabs.Tasks,
    renderCondition: (props) => {
      const { service_status } = props.user;
      return service_status === ROLES.SUPERADMIN || service_status === ROLES.ADMIN;
    },
  },
  {
    tabUrl: 'create-task',
    info: 'Создать задачу',
    component: CreateTask,
    renderCondition: (props) => {
      const { service_status } = props.user;
      return service_status === ROLES.SUPERADMIN || service_status === ROLES.ADMIN;
    },
  },
];

const checkCondition = (condition, props) => ((!condition || (typeof condition === 'function' && condition(props))));

const Profile = () => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();
  const user = useSelector((state) => state.user);

  const events = useSelector((store) => store.table.events);

  let currentUserData = {
    name: user.name,
    surname: user.surname,
    phone: user.phone,
    organization: user.organization,
    position: user.position,
    country: user.country,
    town: user.town,
    sex: user.sex,
    birth: user.birth,
    bio: user.bio,
  };

  currentUserData = Object.entries(currentUserData).reduce((acc, [key, val]) => {
    if (!val) { return acc; }
    acc[key] = val;
    return acc;
  }, {});

  const props = {
    user,
  };

  const tabs = getTabs({
    dispatch, currentUserData, events,
  });

  // useEffect(() => {
  //   if (user.id) {
  //     dispatch(getUserEvents(user.id, user.service_status));
  //   }
  // }, [dispatch, user.id]);

  const renderLinks = ({
    tabUrl, info, badge, renderCondition, onClick,
  }) => (
    checkCondition(renderCondition, props) && (
    <Link
      onClick={onClick}
      key={tabUrl}
      className="nav-link active"
      role="tab"
      to={`${url}/${tabUrl}`}
    >
      {info}
      {!!badge && <span className="badge badge-light">{badge}</span>}
    </Link>
    )
  );

  const renderRoutes = ({ tabUrl, component, renderCondition }) => (
    checkCondition(renderCondition, props) && (
    <Route
      key={tabUrl}
      exact
      path={`${path}/${tabUrl}`}
      component={typeof component === 'function' ? () => component(props) : component}
    />
    )
  );

  useEffect(() => {
    dispatch(getCurrentUserInfo());
  }, [dispatch]);

  if (!user.service_status) {
    return (
      <div className="text-center">
        <h1>Загрузка...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <nav className="nav flex-column">
            {tabs.map(renderLinks)}
          </nav>
        </div>
        <div className="col-lg-9">
          <div className="tab-content" id="nav-tabContent">
            {tabs.map(renderRoutes)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default requireAuth(Profile);
