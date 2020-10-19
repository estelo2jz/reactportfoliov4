import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <header>
      <a href="#" class="logo">Portfolio</a>
      <div class="toggle"></div>
        <ul class="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </header>
    )
  }
}

