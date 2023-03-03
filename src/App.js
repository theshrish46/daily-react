import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';


import './style/App.css';

const App = () => {
  return (
    <div>
      <Router>
       <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<div>Page Not found 404</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
