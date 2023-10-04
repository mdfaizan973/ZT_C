import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="logo_name">
          <h2>Zutok Software</h2>
        </div>
        <div className="copyright">
          <p>@copyright 2023</p>
        </div>
        <div className="links">
          <ul>
            <li>Linked In</li>
            <li>Github</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
