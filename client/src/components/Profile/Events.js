import React from "react";
import {postEvent} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

const INPUT_FIELDS = [
    {name: 'email', placeholder: 'Почта создателя мероприятия', type: 'email', autoFocus: true},
    {name: 'name', placeholder: 'Название мероприятия'},
    {name: 'sm_description', placeholder: 'Короткое описание мероприятия'},
    {name: 'description', placeholder: 'Полное описание мероприятия'},
    {name: 'date', placeholder: 'Дата проведения мероприятия', type: 'date'},
    {name: 'phone', placeholder: 'Телефон для связи', type: 'tel'},
    {name: 'presenters', placeholder: 'Почты докладчиков'}
];

const inputField = ({input, meta, name, ...props}) =>
    <div className="form-group">
        <input {...input} autoComplete={name} className="form-control" form="event" {...props} />
    </div>;

const Events = () => {
    const dispatch = useDispatch();
    const postData = useSelector(store => store.form.eventCreation && store.form.eventCreation.values);

    const onClick = (e) => {
        e.preventDefault();
        dispatch(postEvent(postData));
    };

    return <form id="event">
        <div className="tab-pane show active" id="event">
            <p>Создание мероприятия</p>
            {INPUT_FIELDS.map((input, idx) =>
                <Field key={input.name} name={input.name} component={inputField} {...input} />)}
            <div className="form-group text-center">
                <input type="submit" className="btn btn-seconadary" value="Сохранить" onClick={onClick} />
            </div>
        </div>
    </form>;
};

export default reduxForm({form: 'eventCreation'})(Events);
