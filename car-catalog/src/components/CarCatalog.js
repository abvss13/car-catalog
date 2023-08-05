import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';

const CarCatalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/data/db.json').then((response) => {
      setCars(response.data.cars);
    });
  }, []);

  return (
    <div className="car-catalog">
      {cars.map((car) => (
        <CarCard key={car.model} car={car} />
      ))}
    </div>
  );
};

export default CarCatalog;
