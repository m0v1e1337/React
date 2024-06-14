import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">My Website</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">Home</li>
          <li className="header__item">About</li>
          <li className="header__item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
