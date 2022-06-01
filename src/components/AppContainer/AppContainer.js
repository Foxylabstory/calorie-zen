import React from 'react';
import "./AppContainer.css";
import FoodAdder from '../FoodAdder/FoodAdder.js';

function AppContainer() {
  return (
    <div className="container">
      <div className="calories">
      <h2>Калории:</h2>
      </div>
      <FoodAdder alt="123" />
    </div>
  );
}

export default AppContainer;