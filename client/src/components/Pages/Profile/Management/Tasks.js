/* eslint-disable react/prop-types, react/destructuring-assignment, no-shadow */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from 'redux-form';
import {
  addManagerToEvent,
  createTask,
  deleteManagerFromEvent,
  deleteTask,
  getAllTasks,
  moveTask,
  ROLES,
  TASK_STATUSES, updateTask,
} from '../../../../actions';
import Table from '../../../Table/Table';
import CreateTask from './CreateTask';
import { FIELD_NAMES } from '../../../../helpers/consts';
import { scrollToRef } from '../../../../helpers/helpers';

// TODO: remove test tasks!
const testTasks = [{
  id: 1,
  deadline: '2020-10-01',
  name: 'first',
  description: 'first descrip',
  status: 'todo',
},
{
  id: 2,
  deadline: '2020-12-11',
  name: 'seconf',
  description: 'second descrip',
  status: 'inprocess',
}];

const Tasks = () => {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const [editEventId, setEventId] = useState();
  const [editTaskId, setTaskId] = useState();
  const ref = useRef(null);

  useEffect(() => {
    Object.keys(events).forEach((id) => {
      dispatch(getAllTasks(id));
    });
  }, []);

  const getEventColumns = () => [
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
          Header: 'Задачи',
          accessor: 'tasks',
          Cell: (props) => {
            const { id, tasks } = props.row.original;
            const onDeleteTask = (taskId) => {
              dispatch(deleteTask(id, taskId));
              // dispatch(getAllTasks(id));
            };

            const onEditTask = (task) => {
              dispatch(initialize(FIELD_NAMES.TASK, task));
              scrollToRef(ref);
              setEventId(id);
              setTaskId(task.id);
            };

            if (!events[id].tasks) {
              return <div className="text-center">-</div>;
            }

            return (
              <ul className="list-group-flush">
                {Object.values(tasks).map((task) => {
                  if (typeof task === 'string') {
                    return;
                  }
                  const {
                    id, deadline, name, description, status,
                  } = task;

                  return (
                    <li
                      key={id}
                      className="list-group-item"
                    >
                      <ul className="list-group-flush">
                        <li className="list-group-item">{`ИД: ${id}`}</li>
                        <li className="list-group-item">{`Название: ${name}`}</li>
                        <li className="list-group-item">{`Крайний срок: ${deadline}`}</li>
                        <li className="list-group-item">{`Статус: ${status}`}</li>
                        <li className="list-group-item">{`Описание: ${description}`}</li>
                        <button
                          type="button"
                          className="text-center btn btn-outline-danger btn-sm m-2"
                          onClick={() => onDeleteTask(id)}
                        >
                          Удалить
                        </button>
                        <button
                          type="button"
                          className="text-center btn btn-outline-warning btn-sm m-2"
                          onClick={() => onEditTask(task)}
                        >
                          Редактировать
                        </button>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            );
          },
        },
        {
          Header: 'Управление',
          accessor: 'management',
          Cell: (props) => {
            const { id } = props.row.original;

            const onManagerAdd = (id) => {
              const email = prompt('Введите email менеджера');
              if (email) {
                dispatch(addManagerToEvent(id, email));
              }
            };

            const onManagerDelete = (id) => {
              dispatch(deleteManagerFromEvent(id));
            };

            return (
              <div className="form-group">
                <button
                  type="button"
                  className="text-center btn btn-outline-dark btn-sm m-2"
                  onClick={() => onManagerAdd(id)}
                >
                  Добавить менеджера
                </button>
                <button
                  type="button"
                  className="text-center btn btn-outline-danger btn-sm m-2"
                  onClick={() => onManagerDelete(id)}
                >
                  Удалить менеджера
                </button>
              </div>
            );
          },
        },
      ],
    },
  ];

  if (Object.values(events).length < 1) {
    return <div>Загрузка..</div>;
  }

  const eventColumns = getEventColumns(ref);

  const f = (data) => updateTask(editEventId, editTaskId, data);

  return (
    <>
      <Table data={Object.values(events)} columns={eventColumns} />
      <CreateTask scrollRef={ref} action={f} title="Редактирование задачи" renderStatus={false} />
    </>
  );
};

export default Tasks;
