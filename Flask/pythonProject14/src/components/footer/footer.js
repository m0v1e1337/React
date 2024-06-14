import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Copyright &copy; {new Date().getFullYear()} My Website
      </p>
    </footer>
  );
};

export default Footer;
