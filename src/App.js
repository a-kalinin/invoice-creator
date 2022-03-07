import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AppRoutes from './containers/AppRoutes';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className="App_content">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
