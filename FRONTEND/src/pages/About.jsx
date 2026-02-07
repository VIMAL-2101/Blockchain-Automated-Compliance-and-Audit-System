import React from "react";
import PageTransition from "../components/PageTransition";
import { FaUsers, FaBullseye, FaEye } from "react-icons/fa";    
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";


export default function About() {
return (
  <PageTransition>
<>
<Navbar />


<div className="about-sections">

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">👥</span>
      <h3>Who We Are</h3>
    </div>
    <p>
      ChainGRC is a blockchain-driven compliance and audit platform built
      for hybrid cloud ecosystems ensuring transparency and governance.
    </p>
  </div>

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">🎯</span>
      <h3>Our Mission</h3>
    </div>
    <p>
      Modernizing compliance frameworks through automation,
      tamper-proof logging, and real-time validation.
    </p>
  </div>

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">🌍</span>
      <h3>Our Vision</h3>
    </div>
    <p>
      Building a global trust ecosystem powered by blockchain governance.
    </p>
  </div>

</div>





<Footer />
</>
</PageTransition>
);
}

