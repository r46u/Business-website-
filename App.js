import React from 'react';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Our Business</h1>
        <p>Modern, Reliable & Professional</p>
      </header>
      <section>
        <h2>Gallery</h2>
        <div className="gallery">
          <img src="https://via.placeholder.com/150" alt="Sample 1" />
          <img src="https://via.placeholder.com/150" alt="Sample 2" />
          <img src="https://via.placeholder.com/150" alt="Sample 3" />
        </div>
      </section>
      <section>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default App;