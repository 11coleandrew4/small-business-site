import React from 'react';
import NavBar from './NavBar';
import '../CarryOut.css';

export default function CarryOut() {
  return (
    <div>
      <NavBar />
      <div id="carry-out-container">
        <div id="top-text-menu">
          <h2 className="carry-out-top-text">Carry Out Menu</h2>
        </div>
      </div>
    </div>
  );
}
