import React, {useState} from "react";
import './nav.css';


export default function Nav() {
const [activeClass, setActiveClass] = useState('#home')

  return (
    <nav id="#home">
        < div className="container__nav container">
            
                <a href="#"><h1>Ojo Timilehin</h1></a>
                <ul className="navLinks">
                    <li>
                        <a href="#home" onClick={()=> setActiveClass('#home')} className={activeClass === '#home'? 'active' : ''}>Welcome</a>
                    </li>
                    <li>
                        <a href="#about" onClick={()=> setActiveClass('#about')} className={activeClass === '#about' ? 'active' : ''}>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={()=> setActiveClass('#portfolio')} className={activeClass === '#portfolio' ? 'active' : ''}>Portfolio</a>
                    </li>
                    <li className="contact">
                        <a href="#contact" onClick={()=> setActiveClass('#contact')} className={activeClass === '#contact' ? 'active' : ''} >Contact</a>
                    </li>
                </ul>
            
        </div>
    </nav>
  );
}
