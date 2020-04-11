/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React from 'react';
import {
  Field, reduxForm, reset,
} from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  renderInputField, renderTextareaField, trim, uppercase,
} from '../../../../helpers/helpers';
import { FIELD_NAMES } from '../../../../helpers/consts';
import { changeUserInfo, getCurrentUserInfo } from '../../../../actions';

const INPUTS_FIELDS = [
  {
    name: 'name', placeholder: 'Имя', normalize: uppercase, normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'surname', placeholder: 'Фамилия', normalize: uppercase, normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'phone', placeholder: 'Телефон', normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'organization', placeholder: 'Организация', normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'position', placeholder: 'Должность', normalize: uppercase, normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'country', placeholder: 'Страна', normalize: uppercase, normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'town', placeholder: 'Город', normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'sex', placeholder: 'Пол', normalizeOnBlur: trim, className: 'w-50',
  },
  {
    name: 'birth', placeholder: 'Дата рождения', normalizeOnBlur: trim, type: 'date', className: 'w-25',
  },
  {
    name: 'bio',
    placeholder: 'Биография',
    elementType: 'textarea',
    normalizeOnBlur: trim,
  },
];

const ChangePersonaData = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { submitting, invalid } = props;

  const userEdit = useSelector((store) => store.form[FIELD_NAMES.PROFILE]
        && store.form[FIELD_NAMES.PROFILE].values);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(changeUserInfo(userEdit));
    dispatch(getCurrentUserInfo());
    dispatch(reset(FIELD_NAMES.PROFILE));
    history.push('/profile/personal-info');
  };

  return (
    <div>
      {INPUTS_FIELDS.map((input) => {
        const renderComponent = input.elementType === 'textarea' ? renderTextareaField : renderInputField;

        return (
          <Field
            key={input.name}
            name={input.name}
            component={renderComponent}
            {...input}
          />
        );
      })}
      <div className="form-group text-center">
        <input
          type="submit"
          className="btn btn-seconadary"
          value="Сохранить"
          onClick={onClick}
          disabled={submitting || invalid}
        />
      </div>
    </div>
  );
};

export default reduxForm({
  form: FIELD_NAMES.PROFILE,
  enableReinitialize: true,
})(ChangePersonaData);
