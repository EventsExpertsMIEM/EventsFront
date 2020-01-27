import React from "react";
import {postEvent} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {Field, reduxForm, reset} from "redux-form";

const required = value => value ? undefined : 'Обязательное поле';

const INPUT_FIELDS = [
    // {
    //     name: 'mail',
    //     placeholder: 'Почта создателя мероприятия',
    //     type: 'email',
    //     autoFocus: true,
    //     validate: [email, required]
    // },
    {name: 'name', placeholder: 'Название мероприятия', validate: required},
    {name: 'sm_description', placeholder: 'Короткое описание мероприятия', validate: required},
    {name: 'description', placeholder: 'Полное описание мероприятия', validate: required},
    {name: 'date_time', placeholder: 'Дата проведения мероприятия', type: 'datetime-local', validate: required},
    {name: 'phone', placeholder: 'Телефон для связи', type: 'tel', validate: required},
    // {name: 'presenters', placeholder: 'Почты докладчиков', type: 'text'}
];

const inputField = ({input, meta: {touched, error}, name, ...props}) =>
    <div className="form-group">
        <input {...input} autoComplete={name} className="form-control" form="event" {...props} />
        {error && touched && <p className="text-danger">{error}</p>}
    </div>;

const Events = (props) => {
    const {pristine, submitting, invalid} = props;
    const dispatch = useDispatch();
    const postData = useSelector(store => store.form.eventCreation && store.form.eventCreation.values);

    const onClick = (e) => {
        e.preventDefault();
        dispatch(postEvent(postData));
        dispatch(reset('eventCreation'));
        alert(`Отправлены данные: ${JSON.stringify(postData)}`)
    };

    return <form id="event">
        <div className="tab-pane show active" id="event">
            <p>Создание мероприятия</p>
            {INPUT_FIELDS.map((input, idx) =>
                <Field key={input.name} name={input.name} component={inputField} {...input} />)}
            <div className="form-group text-center">
                <input type="submit" className="btn btn-seconadary" value="Сохранить" onClick={onClick}
                       disabled={pristine || submitting || invalid} />
            </div>
        </div>
    </form>;
};

export default reduxForm({
    form: 'eventCreation',
    initialValues: INPUT_FIELDS
        .reduce((acc, el) => {
            if (el.name === 'presenters') {
                acc[el.name] = "";
            }
            ;
            return acc
        }, {})
})(Events);
