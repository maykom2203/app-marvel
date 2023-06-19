import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/homePage" element={ <HomePage /> } />
      <Route path="/" element={ <Navigate to="/homePage" /> } />
    </Routes>
  )
}

export default App;
