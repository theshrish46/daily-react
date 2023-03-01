import React from 'react';
import "./../styles/App.css";
import "./../styles/Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  )
}

export default Header
