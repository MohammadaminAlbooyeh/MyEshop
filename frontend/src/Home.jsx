import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to myEShop</h1>
      <div className="product-boxes">
        <Link to="/ipad" className="product-box">
          <img src="/static/ipad.png" alt="iPad" />
          <h2>iPad</h2>
        </Link>
        <Link to="/iphone" className="product-box">
          <img src="/static/iphone.png" alt="iPhone" />
          <h2>iPhone</h2>
        </Link>
        <Link to="/macbook" className="product-box">
          <img src="/static/laptop.png" alt="MacBook" />
          <h2>MacBook</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
