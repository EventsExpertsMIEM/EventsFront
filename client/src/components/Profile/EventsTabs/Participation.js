import React from 'react';

const Participation = () => (
  <div className="tab-pane fade active show" id="events-part-tab" role="tabpanel" aria-labelledby="nav-events-part-tab">
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Даты проведения</th>
          <th scope="col">Место проведения</th>
          <th scope="col">Статус</th>
          <th scope="col">Управление</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="event1.html">IV международная конференция ботоводов</a></td>
          <td>26 - 28 февряла 2020</td>
          <td>Москва, Крокус Сити Холл</td>
          <td>Идет регистрация</td>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <td><a href="">Выбор опций участия</a></td>
        </tr>
        <tr>
          <td><a href="event1.html">III международная конференция ботоводов</a></td>
          <td>25 - 27 февряла 2019</td>
          <td>Москва, Крокус Сити Холл</td>
          <td>В архиве</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Participation;
