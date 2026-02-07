import React from "react";
import PageTransition from "../components/PageTransition";
import { FaRobot, FaShieldAlt, FaChartLine } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";


export default function Services() {
return (
  <PageTransition>
<>
<Navbar />


<div className="about-sections">

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">⚙️</span>
      <h3>Compliance Automation</h3>
    </div>
    <p>Automate monitoring with blockchain validation.</p>
  </div>

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">📜</span>
      <h3>Audit Trail Management</h3>
    </div>
    <p>Tamper-proof audit logs for governance teams.</p>
  </div>

  <div className="about-card">
    <div className="about-card-header">
      <span className="about-icon">📊</span>
      <h3>Risk Analytics</h3>
    </div>
    <p>AI dashboards predicting compliance risks.</p>
  </div>

</div>



<Footer />
</>
</PageTransition>
);
}