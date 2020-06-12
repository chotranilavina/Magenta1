import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
    <div className="App">
    <div class="header">
      <a href="#default" class="logo">The Happyness Project</a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#helparoundyou">Help around you</a>
        <a href="#resources">Resources</a>
        <a href="happywall">A happy wall</a>
        <a href="#OurCampaigns">Activities</a>
        <a href="careers">Careers</a>
        <a href="#Subscribe">Subscribe Now</a>
        <a href="Signin">Sign Up | Sign In</a>
        <a href="#contact">Contact</a>
        <a href="partner">Partner with us</a>
      </div>
      </div>
      <header className="App-header">
        <h1> The Happyness Project</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Source : <code>src/App.js</code> 
        </p>
      </header>
      <div class="footer">
    <div class="footer-right">
      <a class="#active" href="#home">Home</a>
      <a href="#subscribe">Subscribe</a>
      <a href="#contactus">Contact Us</a>
      <a href="#campaigns">Our Campaigns</a>
    </div>
    </div>
    </div>
    </Fragment>
  );
}

export default App;
