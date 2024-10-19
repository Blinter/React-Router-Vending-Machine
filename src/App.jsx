import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import itemComponents from './ItemComponents.js';
import { pathNames } from './items.jsx';
import VendingMachine from './VendingMachine.jsx';
import './App.css';

function App() {
  const basename = '/React-Router-Vending-Machine';
  return (
    <Router basename={basename}>
      <Routes>
        <Route exact path="/" element={
          <VendingMachine />} />
        {pathNames.map((pathName, index) => {
          const Component = itemComponents[pathName];
          if (!Component) {
            console.error(`Component for ${pathName} is undefined`);
            return null;
          }
          return (
            <Route
              key={pathName}
              path={`/${pathName}`}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;