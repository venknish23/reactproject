import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      blogPosts: [
        {
          title: 'The Majestic Tigers of Siberia',
          date: 'June 1, 2024',
          author: 'Smit paul',
          imageUrl: 'https://cms.bbcearth.com/sites/default/files/2021-07/Amur%20tiger%20in%20the%20snow_GettyImages-103787456.jpg',
          description: 'Explore the lives of Siberian tigers and their habitat in the deep forests of Russia.'
        },
        {
          title: 'Birdwatching in the Amazon Rainforest',
          date: 'May 18, 2024',
          author: 'Avi S',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmB0zt52oXiyE92MXuYteOj_AlrCxYCezCbg&s',
          description: 'Discover the vibrant and diverse avian species that inhabit the Amazon Basin.'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="top-bar">
          <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/11204740/wildlife-logo-by-mahmoud-elhofy-dribbble.png" alt="Blog Logo" className="logo" />
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main className='main'>
          {this.state.blogPosts.map((post, index) => (
            <article key={index}>
              <h2>{post.title}</h2>
              <p><small>Published on {post.date} by {post.author}</small></p>
              <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '300px' }} />
              <p>{post.description}</p>
              <hr />
            </article>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
