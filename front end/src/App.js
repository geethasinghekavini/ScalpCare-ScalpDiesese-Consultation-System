import logo from './logo.svg';
import home from './Images/home.png';
import './App.css';
import React, { useState } from 'react';
import LoginRegister from './Components/LoginRegister';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={`root ${showLogin ? 'blur' : ''}`}>
      <header className="header">
        <img src={logo} alt="Skin Disease Detection logo" className="header-logo"/>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">Home</a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">About Us</a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">Services</a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button className="header-login-button" onClick={toggleLogin}>Login</button>
      </header>
      <main className="main">
        {!showLogin && (
          <>
            <div className='right-cont'>
              <h1 className='header-title'> ScalpCare </h1>
              <h4 className='head-text2'>HAIR AND SCALP DISEASE IDENTIFIER </h4>
              <button className="right-cont.detect-button" onClick={toggleLogin}>
                Get Started
              </button>
            </div>
            <div className='left-cont'>
              <img src={home} className='home-image' alt='home image'></img>
            </div>
          </>
        )}
      </main>
      {showLogin && (
        <div className="login-wrapper">
          <LoginRegister />
        </div>
      )}
    </div>
  );
}

export default App;
