/* eslint-disable react/prop-types, react/destructuring-assignment,
 jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from 'react-bootstrap-dialog';
import { useHistory } from 'react-router';
import { reset, initialize } from 'redux-form';
import {
  banUser, changeRole, deleteEvent, getAllEvents, getAllUsers, getUserInfo, ROLES, updateEvent,
} from '../../../../actions';
import Table from '../../../Table/Table';
import requireRights from '../../../HOCs/requireRights';
import { formatModalData, normalize, scrollToRef } from '../../../../helpers/helpers';
import CreateEvent from '../../../Publications/Event/CreateEvent';
import { FIELD_NAMES } from '../../../../helpers/consts';
import EditPublications from './EditPublications';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.table.users);
  const events = useSelector((store) => store.table.events);
  const event = useSelector((store) => store.form[FIELD_NAMES.EVENT]
      && store.form[FIELD_NAMES.EVENT].values);
  const [showEdit, toggleShow] = useState(false);

  const onBanClick = async (id) => {
    await dispatch(banUser(id));
    await dispatch(getAllUsers());
  };
  const ref = useRef(null);
  const scrollRef = useRef(null);

  const onRoleChangeClick = async (id, role) => {
    await dispatch(changeRole(id, role));
    await dispatch(getAllUsers());
  };

  const isBanned = (status) => status === 'banned';
  const disabled = (status) => (isBanned(status) ? 'disabled' : undefined);
  const onBan = (status, id) => (isBanned(status) ? undefined : () => onBanClick(id));

  const history = useHistory();

  const onOpenProfile = async (id) => {
    const res = await dispatch(getUserInfo(id));
    if (res instanceof Error) {
      return;
    }
    alert(formatModalData(res));
  };

  const onOpenEventInfo = (id) => {
    ref.current.showAlert(formatModalData(events[events.length - id]));
  };

  const onEventDelete = async (id) => {
    await dispatch(deleteEvent(id));
    await dispatch(getAllEvents());
  };

  const onInitializeClick = (id) => {
    // eslint-disable-next-line no-shadow
    const event = normalize(events)[id];
    if (!event) {
      return undefined;
    }
    return dispatch(initialize(FIELD_NAMES.EVENT, event));
  };

  const onEventEdit = (id) => {
    toggleShow(true);
    onInitializeClick(id);
    scrollToRef(scrollRef);
  };

  const onClick = (e) => {
    e.preventDefault();
    dispatch(updateEvent(event));
    dispatch(reset(FIELD_NAMES.EVENT));
    history.push(`/events/${event.id}`);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAllUsers());
    })();
  }, [dispatch]);

  const userColumns = [
    {
      Header: 'Пользователи',
      columns: [
        {
          Header: 'Email',
          accessor: 'email',
          Cell: (props) => {
            const { email } = props.row.original;
            return (<div>{email}</div>);
          },
        },
        {
          Header: 'Статус',
          accessor: 'role',
          Cell: (props) => {
            const { service_status, status, id } = props.row.original;
            return (
              <div>
                <h4 className="text-center">{`Роль: ${service_status}`}</h4>
                <h4 className="text-center">{`Статус: ${status}`}</h4>
                <select
                  className="form-control"
                  multiple
                  size="5"
                  onChange={(e) => onRoleChangeClick(id, e.target.value)}
                >
                  <option value="" defaultValue readOnly disabled>Изменить роль</option>
                  {Object.values(ROLES).map((el) => (
                    el !== ROLES.SUPERADMIN && (
                    <option
                      key={el}
                      value={el}
                      disabled={el === service_status}
                    >
                      {el}
                    </option>
                    )
                  ))}
                </select>
                <h4
                  className={`text-center btn btn-danger btn-sm ${disabled(status)}`}
                  onClick={onBan(status, id)}
                >
                  Забанить
                </h4>
                <h4
                  className="text-center btn btn-sm btn-outline-primary"
                  onClick={() => onOpenProfile(id)}
                >
                  Подробнее
                </h4>
              </div>
            );
          },
        },
      ],
    },
  ];

  const eventsColumns = [
    {
      Header: 'Мероприятия',
      columns: [
        {
          Header: 'ID',
          accessor: 'id',
          Cell: (props) => {
            const { id } = props.row.original;
            return (<div>{id}</div>);
          },
        },
        {
          Header: 'Название',
          accessor: 'name',
          Cell: (props) => {
            const { name } = props.row.original;
            return (<div>{name}</div>);
          },
        },
        {
          Header: 'Даты проведения',
          accessor: 'date',
          Cell: (props) => {
            const { start_date, end_date, start_time } = props.row.original;
            return (
              <div>
                <h6 className="text-center">{`Начало: ${start_date}`}</h6>
                <h6 className="text-center">{`Время начала: ${start_time}`}</h6>
                <h6 className="text-center">{`Окончание: ${end_date}`}</h6>
              </div>
            );
          },
        },
        {
          Header: 'Контактная информация',
          accessor: 'location',
          Cell: (props) => {
            const { location, site_link } = props.row.original;
            return (
              <div>
                {' '}
                <h6 className="text-center">{`Сайт: ${location}`}</h6>
                <h6 className="text-center">{`Место проведения: ${site_link}`}</h6>
              </div>
            );
          },
        },
        {
          Header: 'Описание',
          accessor: 'description',
          Cell: (props) => {
            const { sm_description } = props.row.original;
            return (
              <div>{sm_description}</div>
            );
          },
        },
        {
          Header: 'Управление',
          accessor: 'management',
          Cell: (props) => {
            const { id } = props.row.original;
            return (
              <div>
                <h4
                  className="text-center btn btn-sm btn-outline-success"
                  onClick={() => onOpenEventInfo(id)}
                >
                  Подробнее
                </h4>
                <h4
                  className="text-center btn btn-sm btn-outline-danger"
                  onClick={() => onEventDelete(id)}
                >
                  Удалить
                </h4>
                <h4
                  className="text-center btn btn-sm btn-outline-primary"
                  onClick={() => onEventEdit(id)}
                >
                  Редактировать
                </h4>
              </div>
            );
          },
        },
      ],
    },
  ];

  const editComponent = () => (
    <CreateEvent
      onClick={onClick}
      scrollRef={scrollRef}
      title="Редактировать событие"
    />
  );

  return (
    <>
      <Dialog ref={ref} />
      {/* <TagsPanel /> */}
      <Table data={users} columns={userColumns} />
      <EditPublications
        data={events}
        columns={eventsColumns}
        showEdit={showEdit}
        editComponent={editComponent}
      />
    </>
  );
};

export default requireRights(AdminPanel);
