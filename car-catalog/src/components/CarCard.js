import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.img_url} alt={car.model} />
      <h2>{car.brand}</h2>
      <h3>{car.model}</h3>
      <p>Price: {car.price}</p>
      {}
    </div>
  );
};

export default CarCard;
