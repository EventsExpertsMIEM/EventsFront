import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../actions";

const required = value => value ? undefined : 'Обязательное поле';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Неверный формат email адреса' : undefined;

const uppercase = data => data && data[0].toUpperCase() + data.slice(1);

const INPUTS_FIELDS = [
    {
        name: "name",
        placeholder: "Имя",
        validate: required,
        normalize: uppercase
    },
    {name: "surname", placeholder: "Фамилия", validate: required, normalize: uppercase},
    {name: "mail", type: "email", placeholder: "Адрес электронной почты", validate: [required, email]},
    {name: "password", type: "password", placeholder: "Пароль", validate: required},
    {name: "repeatPassword", type: "password", placeholder: "Подтверждение пароля",},
];

const inputField = ({input, meta: {touched, error}, name, ...props}) =>
    <div className="form-group">
        <input {...input} autoComplete={name} className="form-control" form="register" {...props} />
        {error && touched && <p className="text-danger">{error}</p>}
    </div>;

const SignUp = (props) => {
    const {pristine, submitting, invalid} = props;
    const dispatch = useDispatch();
    const registerDate = useSelector(store => store.form.register && store.form.register.values);
    const passwordsMatch = registerDate.password === registerDate.repeatPassword;

    const onClick = (e) => {
        e.preventDefault();
        dispatch(register(registerDate));
        dispatch(reset('register'));
        alert(`Отправлены данные: ${JSON.stringify(registerDate)}`)
    };

    return (
        <form id="signUp">
            <div className="tab-pane show active" id="nav-register" role="tabpanel">
                {INPUTS_FIELDS.map((input, idx) =>
                    <Field key={input.name} name={input.name} component={inputField} {...input} />
                )}
                <div className="form-row text-center">
                    <div className="form-group text-center col-12">
                        <input type="submit" className="btn btn-seconadary" value="Регистрация" onClick={onClick}
                               disabled={pristine || submitting || invalid || !passwordsMatch} />
                        {!passwordsMatch && <p className="text-danger">Пароли не совпадают</p>}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'register',
    initialValues: {}
})(SignUp);
