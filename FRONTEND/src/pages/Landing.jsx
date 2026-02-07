import React from "react";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function Landing() {
  return (
     <PageTransition>
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Blockchain-Based <span>Compliance & Audit System</span> for
            <br />
            <span> Hybrid Cloud GRC</span>
          </h1>
          <p>
            A next-generation governance, risk, and compliance platform
            that ensures transparency, immutability, and trust across
            hybrid cloud infrastructures using blockchain technology.
          </p>
        </div>

        <div className="hero-image">
  <img
    src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
    alt="Blockchain Network"
  />
</div>

      </section>

      {/* INFO CARDS */}
      <section className="cards">
        <div className="card">
           <h3>🔐 What is This?</h3>
          <p>
            This system provides a secure and transparent method to
            record compliance and audit activities using blockchain.
            All logs are immutable and verifiable.
          </p>
        </div>

        <div className="card">
          <h3>⚙️ How It Works</h3>

          <p>
            Compliance events from hybrid cloud environments are captured,
            validated, and stored as blockchain transactions to prevent
            tampering.
          </p>
        </div>

        <div className="card">
          <h3>📊 Audit Process</h3>
          <p>
            Auditors can verify logs in real time without altering records,
            ensuring trust, accountability, and faster audit cycles.
          </p>
        </div>

        <div className="card">
          <h3>🛡️ Why Blockchain?</h3>
          <p>
            Blockchain eliminates manual manipulation, improves governance,
            and creates a permanent, tamper-proof audit trail.
          </p>

          
        </div>
      </section>
      

      
      <Footer />
    </>
    </PageTransition>
  );
}
