import React from 'react';
import NavBar from './NavBar';
import '../CarryOut.css';

let menuItems = [
  {
    dish: 'Buffalo Wings',
    description: 'Hot, BBQ, or Teriyaki',
    price: '$14.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: true,
    isBottom: false,
  },
  {
    dish: 'Buffalo Fingers',
    description: 'Hot, BBQ, or Teriyaki',
    price: '$13.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Buffalo Shrimp',
    description: 'Hot, BBQ, or Teriyaki',
    price: '$15.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Onion Rings',
    description: 'An old classic',
    price: '$8.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Beer Battered Mushrooms',
    description: "You can't eat just one!!",
    price: '$9.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Beer Battered Zucchini',
    description: 'A healthy starter?!?!',
    price: '$9.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Mozzerella Sticks',
    description: "There's something about melted cheese...",
    price: '$9.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Half Slab Ribs',
    description: '(there is no description provided)',
    price: '$17.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'BBQ Rib Tips',
    description: 'South Side delicacy goes North Shore',
    price: '$17.99',
    type: 'Appetizer',
    typeInfo: '',
    isTop: false,
    isBottom: true,
  },
  {
    dish: 'BBQ Meatloaf',
    description: 'Homemade meatloaf on a brioche bun',
    price: '$15.99',
    type: 'Burgers & Sandwitches',
    typeInfo:
      'Items include Fries or Sweet Potato Fries and Cole Slaw. Baked/Sweet Potato or Vegetables $1 extra. Many of these Sandwitches are heart healthy.',
    isTop: true,
    isBottom: false,
  },
  {
    dish: 'BBQ Texas Brisket Sandwitch (8oz)',
    description: 'Sliced slow cooked brisket',
    price: '$14.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Skirt Steak',
    description:
      'A North Shore staple. Topped with grilled onion on a French roll',
    price: '$21.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Da Burger (8oz)',
    description:
      'Fresh ground beef cooked to your liking. Cheese, bacon, grilled onion, and mushroom available upon request for added charge',
    price: '$13.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Turkey Burger',
    description: 'Healthy, tasty, tender & juicy',
    price: '$12.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Veggie Burger',
    description: 'Served with a side of ranch',
    price: '$13.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Chicken Sammy (8oz)',
    description: 'Chicken breast prepared BBQ, teriyaki, or broiled',
    price: '$13.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Pulled Pork',
    description: 'Cooked in our homemade BBQ sauce',
    price: '$14.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Gyros',
    description: 'Lamb/beef mix with tzatziki, onion & tomato',
    price: '$13.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'The Big Tuna',
    description:
      'Filet of tuna cooked medium to well. Topped with our Greek dressing',
    price: '$15.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Buffalo Chicken',
    description:
      'Breaded fingers with hot buffalo sauce. Served with bleu cheese and dressing',
    price: '$13.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Chicken Shish-ka-Bob on Pita',
    description: 'Served with hummus. Will melt in your mouth',
    price: '$15.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: false,
  },
  {
    dish: 'Soup',
    description: 'Ask the phone attendant about our soup du jour',
    price: '$3.99',
    type: 'Burgers & Sandwitches',
    typeInfo: '',
    isTop: false,
    isBottom: true,
  },
];

export default function CarryOut() {
  let items = menuItems;
  return (
    <div>
      <NavBar />
      <div id="carry-out-container">
        <div id="top-text-menu">
          <h2>Carry Out Menu</h2>
        </div>
        <div id="menu">
          <div className="menu-section">
            {items.map((item, index) => {
              let seperator = '';
              let title = '';
              !item.isBottom
                ? (seperator = <p>-</p>)
                : (seperator = (
                    <h3 className="section-divider">* * * * * *</h3>
                  ));
              item.isTop
                ? (title = <h1 className="title">{item.type}s</h1>)
                : (title = '');
              return (
                <div key={index}>
                  {title}
                  <div className="menu-item-container">
                    <h3 className="menu-item">{item.dish}</h3>
                    <p className="description">
                      {item.description}.......
                      <span className="price">{item.price}</span>
                    </p>
                    {seperator}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
