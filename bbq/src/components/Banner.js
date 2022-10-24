import React from 'react';
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
          <span className="banner-button">Menu</span>
        </div>
        <div className="button-box">
          <span className="banner-button">Directions</span>
        </div>
      </div>
    </div>
  );
}
