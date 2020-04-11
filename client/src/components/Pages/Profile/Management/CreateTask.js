/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Field, reduxForm, reset,
} from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { FIELD_NAMES } from '../../../../helpers/consts';
import {
  renderInputField, renderTextareaField, required, trim, uppercase,
} from '../../../../helpers/helpers';
import { createTask, TASK_STATUSES } from '../../../../actions';

const INPUTS_FIELDS = [
  {
    name: 'id', placeholder: 'ИД мероприятия', normalizeOnBlur: trim, validate: required,
  },
  {
    name: 'name', placeholder: 'Название задачи', normalize: uppercase, normalizeOnBlur: trim, validate: required,
  },
  {
    name: 'description',
    placeholder: 'Описание',
    elementType: 'textarea',
    normalize: uppercase,
    normalizeOnBlur: trim,
    validate: required,
  },
  {
    name: 'deadline', placeholder: 'Дедлайн', type: 'date', normalizeOnBlur: trim, validate: required, className: 'w-25',
  },
  {
    name: 'status', placeholder: 'Статус', elementType: 'select', normalizeOnBlur: trim,
  },
];

const SelectComponent = () => (
  <Field name="status" component="select" className="form-control">
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
  </Field>
);

const CreateTask = ({
  scrollRef, pristine, submitting, invalid, action = createTask, title = 'Создание задачи', renderStatus = false,
}) => {
  const taskData = useSelector((store) => store.form[FIELD_NAMES.TASK]
        && store.form[FIELD_NAMES.TASK].values);
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(action(taskData));
    dispatch(reset(FIELD_NAMES.TASK));
  };

  return (
    <div className="container tab-pane show active mt-3">
      <h5
        className="text-center"
        ref={scrollRef}
      >
        {title}
      </h5>
      {INPUTS_FIELDS.map((input) => {
        if (input.name === 'status' && !renderStatus) {
          return null;
        }
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
        // eslint-disable-next-line consistent-return
        return (
          <Field
            key={input.name}
            name={input.name}
            component={renderComponent}
            {...input}
          />
        );
      })}
      <button
        type="button"
        className="text-center mt-3 btn btn-outline-success"
        onClick={onClick}
        disabled={pristine || submitting || invalid}
      >
        Отправить
      </button>
    </div>
  );
};

export default reduxForm({
  form: FIELD_NAMES.TASK,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(CreateTask);
