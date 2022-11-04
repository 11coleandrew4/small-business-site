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
          <Link to="/directions">
            <span className="banner-button">Directions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
