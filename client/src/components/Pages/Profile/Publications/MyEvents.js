/* eslint-disable react/jsx-props-no-spreading, no-shadow,react/prop-types,
 react/destructuring-assignment */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { initialize, reset } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { FIELD_NAMES } from '../../../../helpers/consts';
import { deleteQuestion, getUserEvents, updateEvent } from '../../../../actions';
import { mapTagsToSelected, scrollToRef } from '../../../../helpers/helpers';
import MyPublications from './MyPublications';
import CreateQuestion from '../../../Publications/Event/CreateEvent';

const dict = {
  active: 'Открыт',
  closed: 'Закрыт',
};

const getColumns = (ref, toggleShow) => [
  {
    Header: 'Мои вопросы',
    columns: [
      {
        Header: 'Тема вопросов',
        accessor: 'id',
        Cell: (props) => {
          const { title, id } = props.row.original;
          return (
            <Link to={`/events/${id}`}>{title}</Link>
          );
        },
      },
      {
        Header: 'Статус',
        accessor: 'status',
        Cell: (props) => {
          const { status, id } = props.row.original;

          const dispatch = useDispatch();
          const events = useSelector((store) => store.events);
          const tags = useSelector((store) => store.tags);
          const user = useSelector((store) => store.user);

          const onInitializeClick = (id) => {
            const event = events[id];
            if (!tags) {
              return undefined;
            }
            return dispatch(initialize(FIELD_NAMES.EVENT,
              {
                ...event,
                tags: {
                  ...mapTagsToSelected(tags, false),
                  ...mapTagsToSelected(event.tags, true),
                },
              }));
          };

          const handleDeleteClick = async (id) => {
            await dispatch(deleteQuestion(id));
          };

          const executeScroll = () => scrollToRef(ref);
          return (
            <>
              <div>{dict[status] || status}</div>
              <button
                className="btn btn-primary btn-sm"
                type="button"
                onClick={() => {
                  toggleShow(true);
                  onInitializeClick(id);
                  executeScroll();
                }}
              >
                Редактировать
              </button>
              <button
                className="btn btn-danger btn-sm"
                type="button"
                onClick={async () => {
                  await handleDeleteClick(id);
                  await dispatch(getUserEvents(user.id));
                }}
              >
                Удалить
              </button>
            </>
          );
        },
      },
    ],
  },
];

const MyEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((store) => store.table.events);
  const event = useSelector((store) => store.form[FIELD_NAMES.EVENT]
        && store.form[FIELD_NAMES.EVENT].values);
  const [showEdit, toggleShow] = useState(false);

  const history = useHistory();
  const ref = useRef(null);

  const columns = getColumns(ref, toggleShow);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(updateEvent(event));
    dispatch(reset(FIELD_NAMES.EVENT));
    history.push(`/events/${event.id}`);
  };

  const editComponent = () => (
    <CreateQuestion
      onClick={onClick}
      scrollRef={ref}
      title="Редактировать вопрос"
    />
  );

  return (
    <MyPublications
      data={events}
      columns={columns}
      showEdit={showEdit}
      editComponent={editComponent}
    />
  );
};

export default MyEvents;
