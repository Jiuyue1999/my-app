import React from 'react';
import logo from '../images/book.png'; 
function Home() {
  return (
    <div className="home-page">
      <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
       
      </header>

      <section className="intro">
        <h2>Welcome to Our Bookstore</h2>
        <p className="intro-text">
          Discover the world of books at Book Emporium. We offer a curated collection of literary wonders to ignite your imagination.
        </p>
      </section>

      <section className="vision-mission">
        <h2>Our Vision & Mission</h2>
        <p>
          <strong>Vision:</strong> To inspire and empower people through the joy of reading and learning.
        </p>
        <p>
          <strong>Mission:</strong> To provide a wide selection of high-quality books, fostering a love for reading and knowledge.
        </p>
      </section>

      <section className="strategy">
        <h2>Our Business Strategy</h2>
        <p>
          Our strategy is to curate an extensive collection of books across various genres, offer exceptional customer service, and create a community of book enthusiasts.
        </p>
      </section>

      <section className="products-services">
        <h2>Products and Services</h2>
        <p>
          We offer a diverse range of books, including fiction, non-fiction, educational, and more. Our services include easy online ordering, secure payment, and fast delivery to your doorstep.
        </p>
      </section>
    </div>
  );
}

export default Home;
