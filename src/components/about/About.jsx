import React from "react";
import './about.css';
import solid from '../../assets/solid-stars.svg'
import aboutImg from '../../assets/aboutme_svg.svg'

export default function About() {
  return (
    <section id="about">
        <h3 className="aboutme">About Me</h3>
      <div className="about__container container">
        <img src={solid} alt="i" className="solid-star"/>
        <img src={aboutImg} alt="" className="about__img" />
        <div className="about__text">
          <p>I am a product designer with an experienced skills on prototyping, wireframing, user research and usability testing. Applying Design Sprint, Design thinking process and prototype testing. In addition, I use programs such as Figma and Maze.</p>

          <a href="#contact" className="btn__about btn">Contact</a>
        </div>
        
      </div>
    </section>
  );
}
