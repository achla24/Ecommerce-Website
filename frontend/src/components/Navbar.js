// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// function Navbar() {
//   const { cartCount } = useCart();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <Link className="navbar-brand fw-semibold" to="/">E-Commerce</Link>

//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="mainNavbar">
//         <ul className="navbar-nav me-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Items</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link position-relative" to="/cart">
//               Cart
//               {cartCount > 0 && (
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   {cartCount}
//                   <span className="visually-hidden">items in cart</span>
//                 </span>
//               )}
//             </Link>
//           </li>
//         </ul>
//         <div className="d-flex">
//           <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
//           <Link className="btn btn-primary" to="/signup">Signup</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm px-3">
      <Link className="navbar-brand fw-bold text-light" to="/">
        🛒 E-Commerce
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link text-light fw-semibold" to="/">
              Items
            </Link>
          </li>
          <li className="nav-item position-relative">
            <Link className="nav-link text-light fw-semibold" to="/cart">
              Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Link>
          </li>
        </ul>

        <div className="d-flex">
          <Link
            className="btn btn-light text-primary rounded-pill fw-semibold mx-2"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="btn btn-light text-primary rounded-pill fw-semibold"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
