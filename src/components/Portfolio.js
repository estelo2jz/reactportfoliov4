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
              <h2>As a Web Development</h2>
              <p>
                First portfolio that I build using HTML/SCSS/JavaScript/React/CMS with the help of my mentor, includes a list of my projects.
              </p>
              <a href="https://estelo.net/" target="_blank">Explore</a>
            </div>
          </div>
          <div className="portfolio__projects">
            <a href="https://estelo.net/" target="_blank">
              <div className="portfolio__items">
                <h1>Portfolio V1</h1>
              </div>
            </a>
            <a href="https://esteloportfoliov2.netlify.app/#project" target="_blank">
              <div className="portfolio__items">
                <h1>Portfolio V2</h1>
              </div>
            </a>
            <a href="https://app.netlify.com/sites/esteloportfoliov3/overview" target="_blank">
              <div className="portfolio__items">
                <h1>Portfolio V3</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
