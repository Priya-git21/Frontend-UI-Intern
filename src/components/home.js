import React from 'react';
import './home.css';
import appStoreButton from './assets/appstore.png';
import phone from './assets/phone.png';
import elements from './assets/elements.png';
import ghost1 from './assets/ghosts/ghost1.png';
import ghost2 from './assets/ghosts/ghost2.png';
import ghost3 from './assets/ghosts/ghost3.png';

const AnimatedHome = () => {


  return (
    <div className="animated-home">
      <div className="left-half">
        <div className="content">
          <img src={elements} alt="Download on the App Store" className='top' />

          <p>Ahead App</p>
          <div className="col-md-12 ">
            <h1 className="animated-text animate-character">
              Master your life by mastering emotions
            </h1>

          </div>

          <div className="app">
            <a href="/" className="app-store-link">
              <img src={appStoreButton} alt="Download on the App Store" />
            </a>
            <div className="star-rating">
              <span>★★★★★</span>
            </div>
            <div>
              <small>100+ App Store reviews</small>
            </div>
          </div>
          <img src={elements} alt="Download on the App Store" className='top' />
        </div>
      </div>
      <div className="right-half">
        <div className="revolving-circle">
          <div className="rotating-images">
            <img src={ghost1} alt="ghost1" className="ghost rotating-image image1" />
            <img src={ghost2} alt="ghost2" className="ghost rotating-image image2" />
            <img src={ghost3} alt="ghost3" className="ghost rotating-image image3" />

          </div>
          <div className="center-circle"></div>
          <img src={phone} alt="Phone" className="phone-image" />
        </div>
      </div>

    </div>
  );
};

export default AnimatedHome;
