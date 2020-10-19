import React, { Component } from 'react';
import { AiFillHome, AiFillContacts } from 'react-icons/ai';
import { SiAboutDotMe } from 'react-icons/si';
import { GrBusinessService } from 'react-icons/gr';
import { BsFillPersonLinesFill, BsFiles } from 'react-icons/bs';
import { RiCustomerService2Line } from 'react-icons/ri';

export default class Nav extends Component {
  render() {
    return (
      <header>
      <a href="#" class="logo">Estelo A.</a>
      <div class="toggle"></div>
        <ul class="menu">
          <li><a href="#home"><AiFillHome /></a></li>
          <li><a href="#about"><SiAboutDotMe /></a></li>
          <li><a href="#services"><AiFillContacts /></a></li>
          <li><a href="#portfolio"><BsFiles /></a></li>
          <li><a href="#contact"><RiCustomerService2Line /></a></li>
        </ul>
      </header>
    )
  }
}

