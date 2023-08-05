import React, { useState } from 'react';

const CarSearch = ({ cars, setFilteredCars }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredCars = cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.model.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCars(filteredCars);
  };

  return (
    <div className="car-search">
      <input
        type="text"
        placeholder="Search by Brand or Model"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default CarSearch;
