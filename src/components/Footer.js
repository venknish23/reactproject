// Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ contact }) => {
  return (
    <footer>
      <p>Contact us on LinkedIn: <a href={contact.linkedin}>{contact.profile}</a></p>
      <p>Address: {contact.address}</p>
      <p>Phone: {contact.phone}</p>
    </footer>
  );
}

export default Footer;
