import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_container">
          <div className="footer-left">
            <h2>Estelo Abellanosa</h2>
            <p>
              Front-End Web Developer
            </p>
          </div>
          <div className="footer__right">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    )
  }
}
