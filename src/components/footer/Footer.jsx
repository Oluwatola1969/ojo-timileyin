import React from "react";
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <small>Copyright © 2023 Ojo Timileyin Oyenike, All rights reserved</small>
        <ul className="footer__links">
          <li>
            <a href="#home">Welcome</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
