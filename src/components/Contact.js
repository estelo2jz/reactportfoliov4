import React, { Component } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__bar">
          <image>
            <AiTwotoneMail />
          </image>
          <p>Email</p>
          <span>estelo2jz@gmail.com</span>
        </div>  
        <h1>Contact Me</h1>
      </div>
    )
  }
}
