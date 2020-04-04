import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './Pages/Events';
import Auth from './Pages/Auth/Auth';
import NotFoundPage from './Pages/NotFondPage';
import Navigation from './Pages/Navigation';
import Publication from './Publications/Publication/Publication';
import CreateQuestion from './Publications/Event/CreateEvent';
import Profile from './Pages/Profile/Profile';

const routesMap = {
  main: {
    path: '/', requireAuth: null, component: Events, exact: true,
  },
  info: { path: '/questions/:id', requireAuth: null, component: Publication },
  profile: { path: '/profile', requireAuth: true, component: Profile },
  createQuestion: { path: '/create-event', requireAuth: true, component: CreateQuestion },
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
