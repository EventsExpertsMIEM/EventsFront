import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {login, register} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const required = value => value ? undefined : 'Обязательное поле';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Неверный формат email адреса' : undefined;

const INPUTS_FIELDS = [
    {name: "mail", type: "email", placeholder: "Адрес электронной почты", validate: [required, email]},
    {name: "password", type: "password", placeholder: "Пароль", validate: required},
];

const inputField = ({input, meta: {touched, error}, name, ...props}) =>
    <div className="form-group">
        <input {...input} autoComplete={name} className="form-control" form="register" {...props} />
        {error && touched && <p className="text-danger">{error}</p>}
    </div>;

const SignIn = (props) => {
    const {pristine, submitting, invalid} = props;
    const dispatch = useDispatch();
    const loginData = useSelector(store => store.form.login && store.form.login.values);

    const onClick = (e) => {
        e.preventDefault();
        dispatch(login(loginData));
        dispatch(reset('register'));
        alert(`Отправлены данные: ${JSON.stringify(loginData, null, 4)}`)
    };

    return (
        <form id="signIn">
            <div className="tab-pane show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                {INPUTS_FIELDS.map((input, idx) =>
                    <Field key={input.name} name={input.name} component={inputField} {...input} />
                )}
            </div>
            <div className="form-group text-center col-12">
                <input type="submit" className="btn btn-seconadary" value="Вход" onClick={onClick}
                       disabled={pristine || submitting || invalid} />
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'login',
    initialValues: {}
})(SignIn);

const a = <div>
    <div className="form-group">
        <input type="email" className="form-control" id="inputEmail1"
               placeholder="Адрес электронной почты"
               form="signIn"
               required
        />
    </div>
    <div className="form-group">
        <input type="password" className="form-control" id="inputPassword1" placeholder="Пароль"
               form="signIn"
               required
        />
    </div>
    <div className="form-row text-center">
        <div className="col-12">
            <input type="submit" className="btn btn-primary" value="Вход" />
            <div className="alert alert-danger" role="alert" style={{"display": "none"}}>
                Неверное имя пользователя или пароль
            </div>
        </div>
    </div>
</div>
