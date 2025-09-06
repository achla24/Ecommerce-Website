import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">E-Commerce</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
        <div>
          <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
          <Link className="btn btn-primary" to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
