import React from 'react';

const CarDetail = ({ car, onBack }) => {
  return (
    <div className="car-detail">
      <button onClick={onBack}>Back to Catalog</button>
      <img src={car.img_url} alt={car.model} />
      <h2>{car.brand}</h2>
      <h3>{car.model}</h3>
      <p>Price: {car.price}</p>
      <p>Engine Type: {car.engine_type}</p>
      <p>Acceleration: {car.acceleration}</p>
      <p>Release Date: {car.release_date}</p>
      <p>Maximum Speed: {car.maximum_speed}</p>
    </div>
  );
};

export default CarDetail;
