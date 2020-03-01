import React from 'react';

// eslint-disable-next-line react/prop-types
const Hotel = ({ children, id }) => (
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id={id} />
    <label className="form-check-label" htmlFor={id}>
      {children}
    </label>
  </div>
);

export default Hotel;
