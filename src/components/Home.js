import React, { Component } from 'react';
import Logo1 from '../logo/logo3.png';

export default class Home extends Component {
  render() {
    return (
      <div className="hero__section">
        <div className="hero__wrapper">
          <div className="column__left">
            <span>04 - Estelo Abellanosa</span>
            <h1>Front-End Web Developer</h1>
            <p>I have 2 years of experience as a web developer. I'm a tech enthusiast passionate in codes. I design, build web applications, and I'm currently looking for new opportunity.</p>
          </div>
          <div className="column__right">
            <img src={Logo1} alt="brain" className="hero__img"/>
          </div>
        </div>
      </div>
    )
  }
}
