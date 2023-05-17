import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ConcessionDetailPage from './pages/ConcessionDetailPage';
import ConcessionDirectoryPage from './pages/ConcessionDirectoryPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Col, Row } from 'reactstrap';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/Concession' element={<ConcessionDirectoryPage />}></Route>
        <Route path='/Concession/:snackId' element={<ConcessionDetailPage />}></Route>
      </Routes>
      <Col>
        <Row>
          <Footer> </Footer>
          
        </Row>
      </Col>
    </div>
 );
}

export default App;
