/* eslint-disable react/prop-types, react/destructuring-assignment, no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addManagerToEvent, createTask, deleteManagerFromEvent, deleteTask, getAllTasks, moveTask, ROLES, TASK_STATUSES,
} from '../../../../actions';
import Table from '../../../Table/Table';
import CreateTask from './CreateTask';

const Tasks = () => {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();

  const eventColumns = [
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
            const { id } = props.row.original;
            useEffect(() => {
              dispatch(getAllTasks(id));
            });

            console.log(events[id].tasks);

            // const onTaskStatusChange = (eventId, taskId, status) => {
            //   dispatch(moveTask(eventId, taskId, status));
            // };
            //
            // const a = () => (
            //   <select
            //     className="form-control"
            //     multiple
            //     size="5"
            //     onChange={(e) => onTaskStatusChange(id, e.target.value)}
            //   >
            //     <option value="" defaultValue readOnly disabled>Изменить роль</option>
            //     {Object.values(TASK_STATUSES).map((el) => (
            //       <option
            //         key={el}
            //         value={el}
            //         disabled={el === false}
            //       >
            //         {el}
            //       </option>
            //     ))}
            //   </select>
            // );

            const onDeleteTask = (taskId) => {
              dispatch(deleteTask(taskId));
            };

            const onEditTask = (taskId) => {
              console.log('edit task', taskId);
            };

            return (
              <div>
                <button
                  type="button"
                  className="text-center btn btn-outline-danger m-2"
                  onClick={onDeleteTask}
                >
                  Удалить задачу
                </button>
                <button
                  type="button"
                  className="text-center btn btn-outline-warning m-2"
                  onClick={onEditTask}
                >
                  Редактировать задачу
                </button>
              </div>
            );
            // events[id].tasks && events[id].tasks.map((task) => (
            //     <li key={task}>{task}</li>
            // ))
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
                  className="text-center btn btn-outline-dark m-2"
                  onClick={() => onManagerAdd(id)}
                >
                  Добавить менеджера
                </button>
                <button
                  type="button"
                  className="text-center btn btn-outline-danger m-2"
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

  const onCreateTask = () => {
    console.log('onCreateTask');
    // return (dispatch(createTask()));
  };

  return (
    <>
      <Table data={Object.values(events)} columns={eventColumns} />
      {/* <button type="button" className="text-center btn btn-outline-primary" onClick={onCreateTask}>Создать мероприятие</button> */}
      <CreateTask />
    </>
  );
};

export default Tasks;
