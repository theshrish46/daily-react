import React from 'react';
import { Link } from 'react-router-dom';

import './../style/Header.css';
import './../style/App.css';

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/work'>Work</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <Link>Resume</Link>
      </nav>
    </div>
  )
}

export default Header
