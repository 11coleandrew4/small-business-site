import React from 'react';
import '../HoursBanner.css';
import { BsClockHistory } from 'react-icons/bs';
import { FaMapSigns } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

export default function HoursBanner() {
  return (
    <div id="hours-banner-container">
      <div id="operating-hours">
        <BsClockHistory id="clock-icon" />
        <h3>
          Mon - Sat: 4-9 pm <br />
          Sun: 4-8 pm
        </h3>
      </div>
      <div id="address">
        <FaMapSigns id="map-icon" />
        <h3>
          589 Elm Place <br />
          Highland Park, IL 60035
        </h3>
      </div>
      <div id="phone-number">
        <FiPhoneCall id="phone-icon" />
        <h3>
          Call us at <br />
          847-432-6393
        </h3>
      </div>
    </div>
  );
}
