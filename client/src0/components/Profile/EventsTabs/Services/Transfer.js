import React from 'react';

// eslint-disable-next-line react/prop-types
const Transfer = ({ children }) => (
  <table className="table">
    <thead className="thead-light">
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Статус</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
);

export default Transfer;
