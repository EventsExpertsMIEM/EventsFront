import React from 'react';
import { reduxForm } from 'redux-form';
import CreatePublication from '../Publication/CreatePublication';
import requireAuth from '../../HOCs/requireAuth';
import { FIELD_NAMES } from '../../../helpers/consts';
import { required, validateUrl } from '../../../helpers/helpers';
import { addEvent } from '../../../actions';

// const INPUT_FIELDS = [
//   {
//     name: 'name',
//     placeholder: 'Тема вопроса',
//     validate: [required, minValue28, maxValue128],
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'sm_description',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'description',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'start_date',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'end_date',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'start_time',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'location',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'site_link',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
//   {
//     name: 'additional_info',
//     placeholder: 'Текст вопрса',
//     validate: [required, maxValue1024],
//     elementType: 'textarea',
//     normalize: uppercase,
//     normalizeOnBlur: trim,
//   },
// ];

const INPUT_FIELDS = [
  { name: 'name', placeholder: 'Название мероприятия', validate: required },
  {
    name: 'sm_description', placeholder: 'Короткое описание мероприятия', elementType: 'textarea', validate: required,
  },
  {
    name: 'description', placeholder: 'Полное описание мероприятия', elementType: 'textarea', validate: required,
  },
  {
    name: 'start_date', placeholder: 'Дата начала мероприятия', type: 'date', validate: required,
  },
  { name: 'end_date', placeholder: 'Дата окончания мероприятия', type: 'date' },
  { name: 'start_time', placeholder: 'Время начала мероприятия', type: 'time' },
  { name: 'location', placeholder: 'Место проведения мероприятия', validate: required },
  { name: 'site_link', placeholder: 'Cсылка на собственный сайт мероприятия', validate: [required, validateUrl] },
  { name: 'additional_info', placeholder: 'Дополнительная информация мероприятия', validate: required },
];

// const INITIAL_VALUES = {
//   title: '',
//   body: '',
//   only_experts_answer: false,
//   closed: false,
//   only_chosen_tags: false,
//   tags: {},
// };

const CreateEvent = ({ title, scrollRef, onClick }) => (
  <CreatePublication
    INPUT_FIELDS={INPUT_FIELDS}
    fieldName={FIELD_NAMES.EVENT}
    addPublication={addEvent}
    title={title || 'Новое мероприятие'}
    scrollRef={scrollRef}
    onClick={onClick}
  />
);

export default reduxForm({
  form: FIELD_NAMES.EVENT,
  initialValues: {},
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(requireAuth(CreateEvent));
