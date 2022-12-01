import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/carteira" element={ <Wallet /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
