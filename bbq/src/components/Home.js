import React from 'react';
import '../Home.css';
import '../NavBar.css';

export default function Home() {
  return (
    <div id="home-container">
      <div id="home-top-text">
        <h2 className="home-top-text">
          CURBSIDE SERVICE AND DELIVERY TO Highland Park, Deerfield, Northbrook,
          Glencoe, Lake Forest, Lincolnshire, Riverwoods and Bannockburn
        </h2>
        <br />
        <h2 className="home-top-text">
          Did you know WE HAVE OUR OWN DELIVERY SERVICE? Save the massive
          upcharge from all the other delivery services. Guaranteed to save you
          up to 30%!
        </h2>
      </div>
      <br />

      <div id="home-main-text">
        <img src="/interior.png" alt="interior" id="interior-picture" />
        <p id="home-main-text">
          As if you didn’t know by now, The BBQ Pit is a family owned and run
          business. My late father, Frank Karigan established The BBQ Pit in
          1978. Our original location was around the corner on First Ave. Many
          of you reading this remember its “joint” type atmosphere. The location
          is all that has changed, really. The meat of our menu is still the
          same with additions every so often to keep up with changing habits.
          The Chicago Tribune, Chicago Sun-Times, Chicago Magazine and North
          Shore Magazine consistently recognize our BBQ Ribs as the best. Those
          accolades are wonderful, but what we are most proud of is the
          relationships we have established with you, our customer. Our business
          survives on local and repeat clientele. You can always count on seeing
          myself or some family member when walking in. At some point during
          your visit, I will try to stop by your table and say “Hello”. In a
          growing world of big box restaurant chains, fast food sandwiches and
          the like; I’m proud to say we are the last of a dying breed and we
          thank you for recognizing that these types of establishments still
          have a place in your life. We live in a busy world and I am honored to
          have you here to hang your hat and eat a good ole’ home cooked meal.
        </p>
      </div>
    </div>
  );
}
