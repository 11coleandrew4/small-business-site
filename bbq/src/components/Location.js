import React from 'react';
import '../Location.css';
import './NavBar.js';
import NavBar from './NavBar.js';

export default function Location() {
  return (
    <div>
      <NavBar />
      <div id="location-container">
        <div id="top-text-location">
          <h2 className="location-top-text">Location</h2>
        </div>
      </div>
    </div>
  );
}
