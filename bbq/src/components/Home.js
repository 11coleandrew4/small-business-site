import React from 'react';
import '../Home.css';
import '../NavBar.css';
import Banner from './Banner';
import AboutUs from './AboutUs';

export default function Home() {
  return (
    <div id="home-container">
      <div id="home-top-text">
        <Banner />
      </div>
      <br />
      <AboutUs />
    </div>
  );
}
