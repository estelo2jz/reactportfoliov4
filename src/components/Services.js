import React, { Component } from 'react';
import Macbook from '../images/keys2.jpeg';
import Logo from "../logo/logo3.png";
import Devlogo from "../logo/dev.png";
import HNDlogo from "../logo/hnd.png";
import Basiclogo from "../logo/logoshinebasic.png";

import { AiTwotoneMail } from 'react-icons/ai';

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="services__container">
          <h1>Services</h1>
          <div className="services__grid">
            <div className="services__left">
              <div className="services__content">
                <img src={Devlogo} alt="logo" />
                <div className="services__desc">
                  <h2>Web Development</h2>
                  <p>
                    lorem ipsum, dolor sit amet consectetur adispisicing elit,
                    Quibusadan voulttes deignissionmos accusamus est alies
                    reprehnedenrit!
                  </p>
                </div>
              </div>
              <div className="services__content">
                <img src={HNDlogo} alt="logo" />
                <div className="services__desc">
                  <h2>Hosting / Domain</h2>
                  <p>
                    These are the Hosting and Domain services that I use for my applications Namecheap, EasyWP, Heroku, Netlify.
                  </p>
                  <a href=""></a>
                </div>
              </div>
              <div className="services__content">
                <img src={Basiclogo} alt="logo"  />
                <div className="services__desc">
                  <h2>Logo Design</h2>
                  <p>
                    Random logo's that I design.
                  </p>
                </div>
              </div>
            </div>
            <div className="services__right">
              <img src={Macbook} alt="logo" className="macbook" />
            </div>
          </div>
        </div>
        <div className="yellow__bar">
          <image>
            <AiTwotoneMail />
          </image>
          <p>Email</p>
          <span>estelo2jz@gmail.com</span>
        </div>
      </div>
    )
  }
}
