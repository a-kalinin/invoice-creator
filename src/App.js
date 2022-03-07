import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Landing from './containers/Landing'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
