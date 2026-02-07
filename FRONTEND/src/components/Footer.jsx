import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../assets/shubham-dhage-T9rKvI3N0NM-unsplash.jpg";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* LEFT */}
      <div className="footer-left">
        <div className="footer-brand">
          <span className="footer-logo">🌐⛓️</span>
          <h2>ChainGRC</h2>
        </div>

        <p className="footer-desc">
          ChainGRC is a blockchain-based compliance and audit platform
          designed for hybrid cloud environments. It enhances governance,
          ensures data integrity, reduces audit complexity, and builds
          institutional trust through transparent audit trails.
        </p>
      </div>

      {/* CENTER */}
      <div className="footer-center">
        <h3>Quick Links</h3>
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About Us</span></Link>
        <Link to="/how-it-works"><span>How It Works</span></Link>
        <Link to="/services"><span>Our Services</span></Link>
      </div>

      

      {/* RIGHT */}
      <div className="footer-right">
        <h3>Get Started with ChainGRC</h3>
        <p>
          Start securing your hybrid cloud governance with a trusted,
          transparent, and tamper-proof compliance system powered by
          blockchain technology.
        </p>
        <Link to="/login" className="btn primary">Get Started</Link>
      </div>

      <div className="footer-bottom">
  🌐⛓️© 2026 ChainGRC — Blockchain-Based Compliance & Audit System Hybrid cloud GRC🌐⛓️
</div>

      
    </footer>
  );
}
