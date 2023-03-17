import React from "react";
import './nav.css';


export default function Nav() {
  return (
    <nav id="#home">
        < div className="container__nav container">
            
                <a href="#"><h1>Ojo Timilehin</h1></a>
                <ul className="navLinks">
                    <li>
                        <a href="#">Welcome</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="contact">
                        <a href="#contact" >Contact</a>
                    </li>
                </ul>
            
        </div>
    </nav>
  );
}
