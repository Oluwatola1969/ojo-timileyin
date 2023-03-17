import React from "react";
import './header.css';
import cv from '../../assets/cv.pdf';
import me from '../../assets/me.jpg';
import {FaBehanceSquare} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'

function header() {
  return (
    <section id="header">
      <div className="container__header container">
        
          <div className="header__text">
            <small>Hello,</small>
            <h2>I'm Ojo Oyenike <br />Timileyin</h2>
            <h5>A UI/UX Designer</h5>
            <a href={cv} className="btn btn-header" download>Download CV</a>
          </div>

          <div className="header__img">
            <img src={me} alt="me" />
          </div>

          <div className="header__socials">
            <a href="https://www.behance.net/oyenike-ojo" target='_blank' className="behance"><FaBehanceSquare/></a>
            <a href="https://www.linkedin.com/in/ojo-oyenike-9a163b1b0" target='_blank' className="linkedin"><AiFillLinkedin/></a>
            <a href="mailto:ojooyeniketimilehin@gmail.com" target='_blank' className="email"><MdOutlineEmail/></a>
          </div>
        
      </div>
    </section>
  );
}

export default header;
