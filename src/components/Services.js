import React, { Component } from 'react';
import Macbook from '../images/macbook.jpeg';
import Logo from "../logo/logo3.png";

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
                <img src={Logo} alt="logo" />
                <div className="services__desc">
                  <h2>UX Strategy</h2>
                  <p>
                    lorem ipsum, dolor sit amet consectetur adispisicing elit,
                    Quibusadan voulttes deignissionmos accusamus est alies
                    reprehnedenrit!
                  </p>
                </div>
              </div>
              <div className="services__content">
                <img src={Logo} alt="logo" />
                <div className="services__desc">
                  <h2>UX Strategy</h2>
                  <p>
                    lorem ipsum, dolor sit amet consectetur adispisicing elit,
                    Quibusadan voulttes deignissionmos accusamus est alies
                    reprehnedenrit!
                  </p>
                </div>
              </div>
              <div className="services__content">
                <img src={Logo} alt="logo"  />
                <div className="services__desc">
                  <h2>UX Strategy</h2>
                  <p>
                    lorem ipsum, dolor sit amet consectetur adispisicing elit,
                    Quibusadan voulttes deignissionmos accusamus est alies
                    reprehnedenrit!
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
