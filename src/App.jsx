import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/carteira" element={ <Wallet /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
