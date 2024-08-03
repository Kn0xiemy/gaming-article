import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/pages/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Header />} />
        </Routes>
      </>
  );
}

export default App
