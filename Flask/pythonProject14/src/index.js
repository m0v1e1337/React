import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/main.css';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
