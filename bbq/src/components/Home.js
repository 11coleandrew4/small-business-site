import React from 'react';
import '../Home.css';
import '../NavBar.css';
import Banner from './Banner';
import AboutUs from './AboutUs';
import HoursBanner from './HoursBanner';

export default function Home() {
  return (
    <div id="home-container">
      <Banner />
      <HoursBanner />
      <AboutUs />
    </div>
  );
}
