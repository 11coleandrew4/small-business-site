import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from './BannerImage';
import '../Banner.css';

export default function Banner() {
  return (
    <div id="banner-container">
      <BannerImage />
      <h1 id="banner-text">
        Serving Great BBQ To Chicago's North Shore Since 1978
      </h1>
      <div id="button-container">
        <div className="button-box">
          <Link to="/carry-out">
            <span className="banner-button">Menu</span>
          </Link>
        </div>
        <div className="button-box">
          <a
            href="https://www.google.com/maps/place/The+BBQ+Pit/@42.1878562,-87.8023174,19z/data=!3m1!4b1!4m5!3m4!1s0x880fc1bb6e00d1f3:0x59e5c3474677f030!8m2!3d42.1878552!4d-87.8017689"
            target="_blank"
            rel="noreferrer"
          >
            <span className="banner-button">Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
}
