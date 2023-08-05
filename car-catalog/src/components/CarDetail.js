import React from 'react';

const CarDetail = ({ car }) => {
  return (
    <div className="car-detail">
      <img src={car.img_url} alt={car.model} />
      <h2>{car.brand}</h2>
      <h3>{car.model}</h3>
      <p>Price: {car.price}</p>
      <p>Type: {car.type}</p>
      <p>Engine Type: {car.engine_type}</p>
      {}
    </div>
  );
};

export default CarDetail;
