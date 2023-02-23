import React from 'react';
import HomePage from './pages/Homepage';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/Consession' element={<ConsessionsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
