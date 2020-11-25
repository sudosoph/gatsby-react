import React from 'react';
import { Link, navigate } from 'gatsby';

/* 
function goToSlicemasters() {
  // 1. Wait for 2 seconds
  setTimeout(() => {
    console.log('Go to slicers!!!');
    navigate('/slicemasters', { replace: true });
  }, 2000);
  // 2. Change the page
}
*/

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
        {/*
        <li>
          <button type="button" onClick={goToSlicemasters}>
            Click me to see slicemasters after 2 seconds
          </button>
        </li>
        */}
      </ul>
    </nav>
  );
}
