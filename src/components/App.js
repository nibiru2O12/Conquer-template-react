import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './Home';
import { TopNav } from './../Common/StyledComponents';
import About from './About';
import Services from './Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav>
          <li><a href="#homepage">Homepage</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#external">External</a></li>
        </TopNav>
        <Home title="conquer" desc="Simple Bootstrap Template"/>
        <About />
        <Services />
      </div>
    );
  }
}


export default App;
