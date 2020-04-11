/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reset, change } from 'redux-form';
import { useHistory } from 'react-router';
import {
  mapTagsToSelected,
  renderInputField,
  renderTextareaField,
} from '../../../helpers/helpers';

const CreatePublication = (props) => {
  const {
    pristine, submitting, invalid, scrollRef, title = '',
    fieldName, addPublication, INPUT_FIELDS,
  } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const publication = useSelector((store) => store.form[fieldName] && store.form[fieldName].values);
  const allTags = useSelector((store) => store.tags);

  const defaultOnClick = async (e) => {
    e.preventDefault();
    const event = await dispatch(addPublication(publication));
    dispatch(reset(fieldName));
    history.push(`/events/${event.description}`);
  };

  const { onClick = defaultOnClick } = props;

  useEffect(() => {
    dispatch(change(fieldName, 'tags', mapTagsToSelected(allTags, false)));
  }, [dispatch, fieldName, allTags]);

  return (
    <div className="container">
      <form id="questions-tab">
        <div className="tab-pane show active mt-3" id="security" aria-labelledby="nav-security">
          {title && <h4>{title}</h4>}
          {INPUT_FIELDS.map((input) => {
            const {
              name, placeholder, type, elementType, className,
            } = input;
            const renderComponent = elementType === 'textarea' ? renderTextareaField : renderInputField;

            return (
              <div className="form-group" key={placeholder}>
                {type === 'checkbox' && <span>{placeholder}</span>}
                <Field
                  {...input}
                  key={name}
                  name={name}
                  component={renderComponent}
                  className={className}
                />
              </div>
            );
          })}
          <div className="form-group text-center">
            <input
              ref={scrollRef}
              type="submit"
              className="btn btn-seconadary"
              value="Сохранить"
              onClick={onClick}
              disabled={pristine || submitting || invalid}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePublication;
