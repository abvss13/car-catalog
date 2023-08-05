import React from 'react';
import { useParams } from 'react-router-dom'; // Remove this line since we are not using React Router

import CarDetail from './CarDetail';

const CarDetailPage = ({ cars }) => {
  const { model } = useParams(); // Remove this line since we are not using React Router
  const car = cars.find((car) => car.model === model);

  return (
    <div>
      {car ? (
        <CarDetail car={car} />
      ) : (
        <p>Car with model "{model}" not found.</p>
      )}
    </div>
  );
};

export default CarDetailPage;
