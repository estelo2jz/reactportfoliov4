import React, { Component } from 'react';
import Logo from "../logo/logo3.png";
import Back from "../images/back.jpeg";
import Pv1 from "../logo/pv1.png";
import Pv2 from "../logo/pv2.png";
import Pv3 from "../logo/pv3.png";


export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__container">
          <h1>Portfolio's</h1>
            <h2>Projects</h2>
          <div className="portfolio__main">
            <div className="portfolio__left">
              <div className="portfolio__project__container">
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="">
                    link me
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                

              </div>
            </div>
            <div className="portfolio__right">
              <h2>As a Web Developer</h2>
              <p>
                I am able to build various web applications throught that i build from scratch and some that i implemented.
              </p>
              <a href="https://estelo.net/" target="_blank">Explore my other portoflio's</a>
            </div>
          </div>
          <div className="portfolio__projects">
              <div className="portfolio__items">
                <a href="https://estelo.net/" target="_blank">
                  <img className="portfolio__image" src={Pv1} />
                </a>
              </div>
              <div className="portfolio__items">
                <a href="https://esteloportfoliov2.netlify.app/#project" target="_blank">
                <img src={Pv2} />
                </a>
              </div>
              <div className="portfolio__items">
                <a href="https://esteloportfoliov3.netlify.app/" target="_blank">
                  <img src={Pv3} />
                </a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
