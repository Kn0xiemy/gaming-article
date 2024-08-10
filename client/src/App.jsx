import React from 'react';
import Home from './components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/About/About.jsx';
import Login from './components/login/Login.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Register from './components/register/Register.jsx';

function App() {

  return (
      <>
      <Header></Header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
        <Footer></Footer>
      </>
  );
}

export default App
