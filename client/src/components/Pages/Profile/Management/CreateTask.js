/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Field, reduxForm, change, reset,
} from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { FIELD_NAMES } from '../../../../helpers/consts';
import {
  renderInputField, renderTextareaField, trim, uppercase,
} from '../../../../helpers/helpers';
import { createTask, TASK_STATUSES } from '../../../../actions';

const INPUTS_FIELDS = [
  {
    name: 'id', placeholder: 'ИД мероприятия', normalizeOnBlur: trim,
  },
  {
    name: 'name', placeholder: 'Название', normalize: uppercase, normalizeOnBlur: trim,
  },
  {
    name: 'description', placeholder: 'Описание', elementType: 'textarea', normalize: uppercase, normalizeOnBlur: trim,
  },
  {
    name: 'deadline', placeholder: 'Дедлайн', type: 'date', normalizeOnBlur: trim,
  },
  // {
  //   name: 'status', placeholder: 'Статус', elementType: 'select', normalizeOnBlur: trim,
  // },
];

const SelectComponent = () => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    console.log(e);
    dispatch(change(FIELD_NAMES.TASK, 'status', e.target.value));
  };

  return (
    <select
      className="form-control"
      onChange={onChange}
    >
      <option value="" defaultValue readOnly disabled>Выбрать статус</option>
      {Object.values(TASK_STATUSES).map((el) => (
        <option
          key={el}
          value={el}
          disabled={el === false}
        >
          {el.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

const CreateTask = () => {
  const taskData = useSelector((store) => store.form[FIELD_NAMES.TASK]
      && store.form[FIELD_NAMES.TASK].values);
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(createTask(taskData));
    dispatch(reset(FIELD_NAMES.TASK));
  };

  return (
    <div>
      <h5 className="text-center">Создание задачи</h5>
      {INPUTS_FIELDS.map((input) => {
        let renderComponent;
        switch (input.elementType) {
          case 'select':
            renderComponent = SelectComponent;
            break;
          case 'textarea':
            renderComponent = renderTextareaField;
            break;
          default:
            renderComponent = renderInputField;
        }
        return (
          <Field
            key={input.name}
            name={input.name}
            component={renderComponent}
            {...input}
          />
        );
      })}
      <button type="button" className="text-center mt-3 btn btn-outline-success" onClick={onClick}>Отправить</button>
    </div>
  );
};

export default reduxForm({
  form: FIELD_NAMES.TASK,
})(CreateTask);
