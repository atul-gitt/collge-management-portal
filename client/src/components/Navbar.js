import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i class="fas fa-university"></i> College Management Portal
        </Link>
      </h1>
      <ul></ul>
    </nav>
  );
}

export default Navbar;
