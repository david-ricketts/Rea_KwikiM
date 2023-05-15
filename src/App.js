import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ConcessionDetailPage from './pages/ConcessionDetailPage';
import ConcessionDirectoryPage from './pages/ConcessionDirectoryPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Footer from './components/Footer';
import Header from './components/Header';
import { Col, Row } from 'reactstrap';
=======
import Footer from './features/HomePage/Footer';

>>>>>>> 2669f72 (Images)
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/Concession' element={<ConcessionDirectoryPage />}></Route>
        <Route path='/Concessionpage' element={<ConcessionDetailPage />}></Route>
      </Routes>
<<<<<<< HEAD
      <Col>
        <Row>
          <Footer />
        </Row>
      </Col>
      </div>
=======
      <Footer> </Footer>
    </div>
>>>>>>> 2669f72 (Images)
  );
}

export default App;
