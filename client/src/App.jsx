import React from 'react';
import Home from './components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Register from './components/register/Register.jsx';
import CreateArticle from './components/create-article/CreateArticle.jsx';

function App() {

  return (
      <>
      <Header></Header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create-article' element={<CreateArticle />} />
        </Routes>
        <Footer></Footer>
      </>
  );
}

export default App
