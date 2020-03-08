/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { postEvent } from '../../../actions';

const required = (value) => (value ? undefined : 'Обязательное поле');

const INPUT_FIELDS = [
  { name: 'name', placeholder: 'Название мероприятия', validate: required },
  { name: 'sm_description', placeholder: 'Короткое описание мероприятия', validate: required },
  { name: 'description', placeholder: 'Полное описание мероприятия', validate: required },
  {
    name: 'date_time', placeholder: 'Дата проведения мероприятия', type: 'datetime-local', validate: required,
  },
];

const inputField = ({
  // eslint-disable-next-line react/prop-types
  input, meta: { touched, error }, name, ...props
}) => (
  <div className="form-group">
    <input {...input} autoComplete={name} className="form-control" form="event" {...props} />
    {error && touched && <p className="text-danger">{error}</p>}
  </div>
);

const Events = (props) => {
  // eslint-disable-next-line react/prop-types
  const { pristine, submitting, invalid } = props;
  const dispatch = useDispatch();
  const postData = useSelector((store) => store.form.eventCreation
      && store.form.eventCreation.values);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(postEvent(postData));
    dispatch(reset('eventCreation'));
    alert(`Отправлены данные: ${JSON.stringify(postData, null, 4)}`);
  };

  return (
    <form id="event">
      <div className="tab-pane show active" id="event">
        <p>Создание мероприятия</p>
        {INPUT_FIELDS.map((input) => (
          <Field
            key={input.name}
            name={input.name}
            component={inputField}
            {...input}
          />
        ))}
        <div className="form-group text-center">
          <input
            type="submit"
            className="btn btn-seconadary"
            value="Сохранить"
            onClick={onClick}
            disabled={pristine || submitting || invalid}
          />
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'eventCreation',
  initialValues: {},
})(Events);
