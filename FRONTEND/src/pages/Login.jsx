import React from "react";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function Login() {
  return (
    <PageTransition>
    <>
      <Navbar />

      <div className="login-split">

        {/* LEFT IMAGE SIDE */}
        <div className="login-image-side">

          <div className="overlay">
            <div className="overlay-content">

              <div className="brand">
                <span className="logo">🌐⛓️</span>
                <h1>ChainGRC</h1>
              </div>

              <h2><bold>Welcome Back!</bold></h2>  

              <p>
                Securely access your blockchain-based compliance and
                audit system for hybrid cloud governance.
              </p>

            </div>
          </div>

        </div>

        {/* RIGHT FORM SIDE */}
        <div className="login-form-side">
          <button
        className="back-btn"
        onClick={() => window.location.href = "/"}
          >
            ← Back to Home
          </button>
          
          <div className="login-card">

            <h2>Login In</h2>
            <p className="sub">
              Access your compliance dashboard.
            </p>

            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="OTP" />

            <button className="btn primary full">
              Login
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
    </PageTransition>
  );
}
