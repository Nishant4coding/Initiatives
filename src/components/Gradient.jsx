import React from 'react';

const Gradient = ({ bgColor, cardNumber, description }) => {
  return (
    <div className={`col-12 sm:col-6 md:col-3 mb-5 ${bgColor}`}>
      <div className="card-body d-flex justify-between align-items-end">
        <div className="card-number">
          <h3 className="m-0">{cardNumber}</h3>
          <small className="strong">{description}</small>
        </div>
        <div className="card-description text-right">
          <small>235K</small>
          <br />
          <small>22.48%</small>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
