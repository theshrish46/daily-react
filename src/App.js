import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import './style/App.css'

const App = () => {
  return (
    <div>
      <Router>
       <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App
