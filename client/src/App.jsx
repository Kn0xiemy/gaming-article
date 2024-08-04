import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Home from './components/pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </>
  );
}

export default App
