import React from "react";
import './portfolio.css';
import homefit from '../../assets/homefit_img.svg'  
import rescuemed from '../../assets/rescuemed.jpg'  

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h3>Portfolio</h3>
      <h5>My recent works</h5>
      <div className="container__portfolio container">
          <div className="img__homefit img__port">
            <img src={homefit} alt="homefit" className="port__homefit" />
            <a href="https://www.behance.net/gallery/165112811/Homefit-case-study " className="btn-port" target='_blank'>Check It Out</a>
          </div>
          <div className="img__rescuemed img__port">
            <img src={rescuemed} alt="rescuemed" className="port__rescuemed" />
            <a href="#" className="btn-port" target='_blank'>Check It Out</a>
          </div>
      </div>
    </section>
  );
}
