import React, { Component } from 'react';
import Logo from "../logo/logo3.png";
import Back from "../images/back.jpeg";
import Pv1 from "../logo/pv1.png";
import Pv2 from "../logo/pv2.png";
import Pv3 from "../logo/pv3.png";

// company images
import Topcomp from "../images/company/top.jpeg";
import Bad from "../images/company/bad.jpeg";
import Barber from "../images/company/barder.jpeg";
import Budget from "../images/company/budget.webp";
import Chinese from "../images/company/chinese.jpeg";
import Crypto from "../images/company/crypto.jpeg";
import Diamond from "../images/company/diamond.jpeg";
import Expense from "../images/company/expense.jpeg";
import Grass from "../images/company/grass.jpeg";
import Gucci from "../images/company/gucci.jpeg";


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
                  <a href="https://topcompanyv2.netlify.app/" target="_blank">
                    Top Company Cultures
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://icydiamond.netlify.app/" target="_blank">
                    Ice Ice Diamond Drip
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://barberclonev2.netlify.app/" target="_blank">
                    Barber Landing Page
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://lawnpro.netlify.app/" target="_blank">
                    Grass Pro LandingPage
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://reacttodoappv2.netlify.app/" target="_blank">
                    React Todo
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://cryptostockstracker.netlify.app/" target="_blank">
                    Crypto Currency API
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://breakedbad-api.netlify.app/" target="_blank">
                    Breaking Bad API
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://topengines.netlify.app/mitsubishi4" target="_blank">
                    Top 10 JDM
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://shoe-library.netlify.app/" target="_blank">
                    Shoe Storage
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://react-expense.netlify.app/" target="_blank">
                    Expense Tracker
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://react-lyricsss.netlify.app/" target="_blank">
                    Lyrics Finder API
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://svelte-budget-app.netlify.app/" target="_blank">
                    Svelte Budget Calc
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>


                <div className="portfolio__project">
                  <a href="https://ministore.netlify.app/" target="_blank">
                    Online Shopping
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://chinesefood.netlify.app/" target="_blank">
                    Chinese Menu 
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://fakegucci.netlify.app/" target="_blank">
                    Fake GUCCI
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://gummy-stickers.netlify.app/" target="_blank">
                    Gummi Code
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
                <div className="portfolio__project">
                  <a href="https://svelte-razors-store.netlify.app/" target="_blank">
                    Svelte Razor
                  </a>
                  <img src={Back} alt="dashboard" className="portfolio__img" />
                </div>
              </div>
            </div>
            {/* <div className="portfolio__right">
              <h2>As a Web Developer</h2>
              <p>
                I am able to build various web applications that i build from scratch and some that i implemented.
              </p>
              <a href="https://estelo.net/" target="_blank">Explore my other portoflio's</a>
            </div> */}
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
