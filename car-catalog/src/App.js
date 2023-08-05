import React, { useState } from 'react';
import CarCatalog from './components/CarCatalog';
import CarDetail from './components/CarDetail';
import Footer from './components/Footer';
// import HomePage from './components/HomePage'; // Commented out to ignore the warning
// import CarDetailPage from './components/CarDetailPage'; // Commented out to ignore the warning
// import CarSearch from './components/CarSearch'; // Commented out to ignore the warning
import Navbar from './components/Navbar';
import data from './data/db.json';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="app">
      {}
      <Navbar />

      {selectedCar ? (
      
        <CarDetail car={selectedCar} onBack={() => setSelectedCar(null)} />
      ) : (
        
        <CarCatalog cars={data.cars} onCarSelect={handleCarSelect} />
      )}

      {}
      <Footer />
    </div>
  );
};

export default App;
