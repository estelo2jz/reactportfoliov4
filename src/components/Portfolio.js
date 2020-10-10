import React, { Component } from 'react';
import Logo from "../logo/logo3.png";
import Back from "../images/back.jpeg";


export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__container">
          <h1>Portfolio</h1>
          <div className="portfolio__main">
            <div className="portfolio__left">
              <img src={Back} alt="dashboard" className="portfolio__img" />
            </div>
            <div className="portfolio__right">
              <h2>Portfolio V1</h2>
              <p>
                First portfolio that I build using HTML/SCSS/JavaScript/React/CMS with the help of my mentor, includes a list of my projects.
              </p>
              <a href="https://estelo.net/" target="_blank">Explore Me!</a>
            </div>
          </div>
          <div className="portfolio__projects">
            <img src={Logo} alt="portfolio" />
            <img src={Logo} alt="portfolio" />
            <img src={Logo} alt="portfolio" />
          </div>
        </div>
      </div>
    )
  }
}
