import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Menu from './Menu.jsx';
import itemComponents from './ItemComponents.js';
import { pathNames } from './items.jsx';
import vendingMachine from './assets/VendingMachine.jpg';
import PromptDialog from './PromptDialog';
import './App.css';

function App() {
  const basename = '/React-Router-Vending-Machine';
  return (
    <Router basename={basename}>
      <Routes>
        <Route exact path="/" element={
          <>
            <PromptDialog />
            <img src={vendingMachine} alt="Vending Machine" />
            <Menu />
          </>} />
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