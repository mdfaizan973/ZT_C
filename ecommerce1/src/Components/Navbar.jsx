import React from "react";
import "./Navstyles.css";
const Navbar = () => {
  return (
    <nav>
      <h1>Zutok Software</h1>
      <ul className="linkes">
        <li>Home</li>
        <li>Mens</li>
        <li>Womens</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
