import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <a href="#">LOGO</a>
      </div>
      <ul className="navbar__menu">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/">Main</a>
        </li>
      </ul>
    </div>
  );
}
