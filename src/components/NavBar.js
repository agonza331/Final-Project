import React from 'react';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';

export default function Navigate() {
  return (
    <nav className="Nav">
      <ul className="Nav-links">
        <li>
          <Link to="src/pages/Home.js" className="site-title">Home</Link>
        </li>
        <li>
          <Link to="src/pages/About.js">About</Link>
        </li>
        <li>
          <Link to="src/pages/AttractionList.js">Attractions</Link>
        </li>
      </ul>
    </nav>
  );
}

