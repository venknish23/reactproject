// Header.js
import React from 'react';
import "./header.css";
import wild from '../images/wild.jpg';


const Header = ({ links }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src= {wild} alt="Your Logo" />
        </div>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link.label}><a href={link.url}>{link.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
