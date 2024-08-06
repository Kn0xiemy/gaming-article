import React from 'react';
import Home from './components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/About/About.jsx';

function App() {

  return (
      <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
        </Routes>
      </>
  );
}

export default App
