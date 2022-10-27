import React from 'react';
import NavBar from './NavBar';
import '../CarryOut.css';

//make array with all menu items, descriptions, and prices
//map over it in the menu div
//return a div with flex direction row inside of the menu div with flex direction column

let menuItems = [
  {
    item: 'Buffalo Wings',
    description: 'Hot, BBQ, or Teriyaki',
    price: '$14.99',
    type: 'appetizer',
  },
  {
    item: 'Buffalo Fingers',
    description: 'Hot, BBQ, or Teriyaki',
    price: '$13.99',
    type: 'appetizer',
  },
  {
    item: 'Buffalo Shrimp',
    description: 'Hot, BBQ, or Teriyaki',
    price: '$15.99',
    type: 'appetizer',
  },
  {
    item: 'Onion Rings',
    description: 'An old classic',
    price: '$8.99',
    type: 'appetizer',
  },
  {
    item: 'Beer Battered Mushrooms',
    description: "You can't eat just one!!",
    price: '$9.99',
    type: 'appetizer',
  },
  {
    item: 'Beer Battered Zucchini',
    description: 'A healthy starter?!?!',
    price: '$9.99',
    type: 'appetizer',
  },
  {
    item: 'Mozzerella Sticks',
    description: "There's something about melted cheese...",
    price: '$9.99',
    type: 'appetizer',
  },
  {
    item: 'Half Slab Ribs',
    description: '(there is no description provided)',
    price: '$17.99',
    type: 'appetizer',
  },
  {
    item: 'BBQ Rib Tips',
    description: 'South Side delicacy goes North Shore',
    price: '$17.99',
    type: 'appetizer',
  },
];

export default function CarryOut() {
  return (
    <div>
      <NavBar />
      <div id="carry-out-container">
        <div id="top-text-menu">
          <h2>Carry Out Menu</h2>
        </div>
        <div id="menu">
          <p>
            <span className="menu-item">Buffalo Wings</span>-
            <span className="description">Hot, BBQ, or Teriyaki</span>{' '}
            <span className="price">$14.99</span>
          </p>
        </div>
      </div>
    </div>
  );
}
