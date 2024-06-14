import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import tigerimg from './images/tiger.jpg';
import parrotimg from './images/Macaw.jpg';
import MountainG from './images/gorrila.jpg';
import Seaimg from './images/sea.jpg';

function App() {
  const [blogPosts] = useState([
    {
      title: 'The Majestic Tigers of Siberia',
      date: 'June 1, 2024',
      author: 'Smit Paul',
      image: tigerimg,
      description: 'Explore the lives of Siberian tigers and their habitat in the deep forests of Russia.'
    },
    {
      title: 'Birdwatching in the Amazon Rainforest',
      date: 'May 18, 2024',
      author: 'Avi S',
      image: parrotimg,
      description: 'Discover the vibrant and diverse avian species that inhabit the Amazon Basin.'
    },
    {
      title: 'The Enigmatic World of Deep Sea Creatures',
      date: 'June 10, 2024',
      author: 'Jenny Marine',
      image: Seaimg,
      description: 'Delve into the mysteries of deep sea ecosystems and their intriguing inhabitants.'
    },
    {
      title: 'Conservation Efforts for Mountain Gorillas',
      date: 'June 20, 2024',
      author: 'Tom Conservator',
      image: MountainG,
      description: 'Learn about the critical conservation efforts saving mountain gorillas from extinction.'
    }
  ]);

  const navLinks = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "#contact", label: "Contact" }
  ];

  const footerInfo = {
    linkedin: "https://www.linkedin.com/in/venkata-nishith-kodi-882242256/",
    profile: "Your Profile",
    address: "452 Main Street, Toronto, ON ",
    phone: "(453) 456-7890"
  };

  return (
    <div className="App">
      <Header links={navLinks} />
      <main className='main'>
        {blogPosts.map((post, index) => (
          <article key={index}>
            <h2>{post.title}</h2>
            <p><small>Published on {post.date} by {post.author}</small></p>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
            <p>{post.description}</p>
          </article>
        ))}
      </main>
      <div id="contact">
        
      </div>
      <Footer contact={footerInfo} />
    </div>
  );
}

export default App;
