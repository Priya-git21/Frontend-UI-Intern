import React from 'react';
import './home.css';
import appStoreButton from './assets/appstore.png';

const Home = () => {
  return (
    <div className="home">
      <div className="left-half">
        <div className="content">
          <p>Ahead App</p>
          <h1>Master your life by mastering emotions</h1>
          <div className='app'>
          <a href="/" className="app-store-link">
            <img src={appStoreButton} alt="Download on the App Store" />
          </a>
          <div>
          <div className="star-rating">
            <span>★★★★★</span>
          </div>
          <div>100+ App Store reviews</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
