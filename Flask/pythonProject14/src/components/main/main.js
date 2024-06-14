import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__title">Welcome to My Website</h2>
      <p className="main__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
        risus porta, tincidunt turpis at, interdum tortor. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas.
      </p>
      <img
        className="main__image"
        src="https://via.placeholder.com/350"
        alt="Placeholder"
      />
    </main>
  );
};

export default Main;
