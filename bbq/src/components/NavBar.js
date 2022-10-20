import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';
import './CarryOut';
import './Location';
import './Home';

export default function NavBar() {
  return (
    <div id="navbar-container">
      <div id="navbar-logo">The BBQ Pit</div>
      <ul id="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carry-out">Carry Out Menu</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
      </ul>
    </div>
  );
}
