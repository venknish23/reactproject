import React from 'react';
import "./header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          {/* Replace 'Your Logo' with your actual logo image */}
          <img src="https://cdn.pixabay.com/photo/2016/04/20/07/19/logo-1340524_960_720.png" alt="Your Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
