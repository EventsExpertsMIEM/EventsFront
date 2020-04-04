/* eslint-disable react/prop-types, react/destructuring-assignment,
 jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from 'react-bootstrap-dialog';
import {
  banUser, changeRole, deleteEvent, getAllEvents, getAllUsers, getUserInfo, ROLES,
} from '../../../../actions';
import Table from '../../../Table/Table';
import requireRights from '../../../HOCs/requireRights';
import TagsPanel from './TagsPanel';
import { formatModalData } from '../../../../helpers/helpers';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.table.users);
  const events = useSelector((store) => store.table.events);

  const onBanClick = async (id) => {
    await dispatch(banUser(id));
    await dispatch(getAllUsers());
  };
  const ref = useRef(null);

  const onRoleChangeClick = async (id, role) => {
    await dispatch(changeRole(id, role));
    await dispatch(getAllUsers());
  };

  const isBanned = (status) => status === 'banned';
  const disabled = (status) => (isBanned(status) ? 'disabled' : undefined);
  const onBan = (status, id) => (isBanned(status) ? undefined : () => onBanClick(id));

  const onOpenProfile = async (id) => {
    const res = await dispatch(getUserInfo(id));
    if (res instanceof Error) { return; }
    alert(formatModalData(res));
  };

  const onOpenEventInfo = (id) => {
    ref.current.showAlert(formatModalData(events[events.length - id]));
  };

  const onEventDelete = async (id) => {
    await dispatch(deleteEvent(id));
    await dispatch(getAllEvents());
  };

  // TODO: edit event
  const onEventEdit = () => {
    console.log('edit event');
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
                  <option value="" defaultValue readOnly>Изменить роль</option>
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
    // site_link(pin):"site_link"
    // sm_description(pin):"sm_descriprion"
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
          Header: 'Данные',
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

  return (
    <>
      <Dialog ref={ref} />
      {/* <TagsPanel /> */}
      <Table data={users} columns={userColumns} />
      <Table data={events} columns={eventsColumns} />
    </>
  );
};

export default AdminPanel;
