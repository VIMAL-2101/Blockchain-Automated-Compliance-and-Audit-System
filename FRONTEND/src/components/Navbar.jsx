import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="nav-left">
        <a href="/"><div className="nav-logo" ><img src="/src/assets/icons8-blockchain-48.png" alt="ChainGRC Logo" /></div></a>
        <span className="nav-title">ChainGRC</span>
      </div>

      <div className="nav-center">
        <div className="dropdown">
          <div className="dropdown-btn">
            About Us ▾
          </div>

          <div className="dropdown-menu">
            <a href="/about">About</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/services">Services</a>
          </div>
        </div>

      </div>

      <div className="nav-right">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="btn primary">Sign Up</Link>
      </div>
    </nav>
  );
}
