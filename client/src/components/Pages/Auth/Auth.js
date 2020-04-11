import React, { useRef } from 'react';
import {
  Link, Redirect, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dialog from 'react-bootstrap-dialog';
import SignUp from './Register';
import SignIn from './Login';

const Auth = () => {
  const { path, url } = useRouteMatch();
  const signIn = useSelector((store) => store.user.signIn);
  const dialogRef = useRef(null);

  return (
    <div className="container">
      <div className="col-6 offset-3">
        <nav className="nav-pills nav-justified">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <Link
              className="nav-item nav-link"
              to={`${url}/register`}
              role="tab"
              aria-controls="register"
            >
              Регистрация
            </Link>
            <Link
              className="nav-item nav-link"
              to={`${url}/login`}
              role="tab"
              aria-controls="login"
            >
              Вход
            </Link>
          </div>
        </nav>
        <Dialog ref={dialogRef} />
        <Switch>
          <Route path={path} exact render={() => <Redirect to={`${path}/register`} />} />
          <Route path={`${path}/login`} component={SignIn} dialogRef={dialogRef} />
          <Route path={`${path}/register`} exact>
            {signIn ? <Redirect to="/" /> : <SignUp dialogRef={dialogRef} />}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
