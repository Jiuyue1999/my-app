import React from 'react';
import logo from '../images/book.png';

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={logo} alt="Company Logo" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1 className="display-4 text-primary">Welcome to Our Bookstore</h1>
          <p className="lead">
            Discover the world of books at Book Emporium. We offer a curated collection of literary wonders to ignite your imagination.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2 className="text-success">Our Vision & Mission</h2>
          <p>
            <strong className="text-success">Vision:</strong> To inspire and empower people through the joy of reading and learning.
          </p>
          <p>
            <strong className="text-success">Mission:</strong> To provide a wide selection of high-quality books, fostering a love for reading and knowledge.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="text-warning">Our Business Strategy</h2>
          <p>
            Our strategy is to curate an extensive collection of books across various genres, offer exceptional customer service, and create a community of book enthusiasts.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h2 className="text-danger">Products and Services</h2>
          <p>
            We offer a diverse range of books, including fiction, non-fiction, educational, and more. Our services include easy online ordering, secure payment, and fast delivery to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
