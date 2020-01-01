import React from 'react';
import {Link, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import Register from "./Register";
import LogIn from "./LogIn";

const Auth = () => {
    let {path, url} = useRouteMatch();
    return (
        <div className="container">
            <div className="col-6 offset-3">
                <nav className="nav-pills nav-justified">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <Link className="nav-item nav-link active" id="nav-register-tab" data-toggle="tab"
                              to={`${url}/nav-register`} role="tab" aria-controls="nav-register">Регистрация</Link>
                        <Link className="nav-item nav-link" id="nav-login-tab" data-toggle="tab"
                              to={`${url}/nav-login`}
                              role="tab" aria-controls="nav-login"
                        >Вход</Link>
                    </div>
                </nav>
                <Switch>
                    <Route path={`${path}`} exact render={() => <Redirect to={`${path}/nav-register`} />} />
                    <Route path={`${path}/nav-register`} component={Register} />
                    <Route path={`${path}/nav-login`} component={LogIn} />
                </Switch>
            </div>
        </div>
    )
};

export default Auth;
