import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './Pages/Events';
import Auth from './Pages/Auth/Auth';
import NotFoundPage from './Pages/NotFondPage';
import Navigation from './Pages/Navigation';
import Publication from './Publications/Publication/Publication';
import CreateEvent from './Publications/Event/CreateEvent';
import Profile from './Pages/Profile/Profile';
import CreateTask from './Pages/Profile/Management/CreateTask';

const routesMap = {
  main: {
    path: '/', requireAuth: null, component: Events, exact: true,
  },
  info: { path: '/events/:id', requireAuth: null, component: Publication },
  profile: { path: '/profile', requireAuth: true, component: Profile },
  createQuestion: { path: '/create-event', requireAuth: true, component: CreateEvent },
  createTask: { path: '/create-task', requireAuth: true, component: CreateTask },
  auth: { path: '/auth', requireAuth: false, component: Auth },
  notFoundPage: { path: '*', requireAuth: false, component: NotFoundPage },
};

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      {Object.values(routesMap).map(({
        path, component, exact,
      }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          component={component}
        />
      ))}
    </Switch>
  </Router>
);

export default App;
