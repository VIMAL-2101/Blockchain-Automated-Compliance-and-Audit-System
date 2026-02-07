import React from "react";
import PageTransition from "../components/PageTransition";
import { FaDatabase, FaLink, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";


export default function HowItWorks() {
return (
   <PageTransition>
<>
<Navbar />


<div className="about-sections">

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">📥</span>
      <h3>Data Capture</h3>
    </div>
    <p>Compliance events collected from hybrid cloud systems.</p>
  </div>

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">⛓️</span>
      <h3>Blockchain Recording</h3>
    </div>
    <p>Logs converted into immutable blockchain transactions.</p>
  </div>

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">✅</span>
      <h3>Audit Verification</h3>
    </div>
    <p>Auditors verify records via cryptographic validation.</p>
  </div>

</div>
    


<Footer />
</>
</PageTransition>
);
}