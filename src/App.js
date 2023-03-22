import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ConsessionDetailPage from './pages/ConsessionDetailPage';
import ConsessionDirectoryPage from './pages/ConsessionDirectoryPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './features/HomePage/Footer';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/Consession' element={<ConsessionDirectoryPage />}></Route>
        <Route path='/Consessionpage' element={<ConsessionDetailPage />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
