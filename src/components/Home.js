import React, { Component } from 'react';
import Logo1 from '../logo/logo3.png';

export default class Home extends Component {
  render() {
    return (
      <div className="hero__section">
        <div className="hero__wrapper">
          <div className="column__left">
            <span>01 - Estelo Abellanosa</span>
            <h1>Front-End Web Developer</h1>
            <p>I have 2 years of experience as a developer and I'm currently looking for the next opportunity.</p>
          </div>
          <div className="column__right">
            <img src={Logo1} alt="brain" className="hero__img"/>
          </div>
        </div>
      </div>
    )
  }
}
