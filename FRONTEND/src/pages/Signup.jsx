import React from "react";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

export default function Signup() {
  return (
    <PageTransition>
    <>
      <Navbar />

      <div className="signup-split">

        {/* LEFT IMAGE SIDE */}
        <div className="signup-image-side">

          <div className="overlay">
            <div className="overlay-content">

              <div className="brand">
                <span className="logo">🌐⛓️</span>
                <h1>ChainGRC</h1>
              </div>

              <h2>Create Your Account</h2>

              <p>
                Join our blockchain-powered compliance ecosystem and
                secure hybrid cloud governance with transparent audit
                workflows.
              </p>

            </div>
          </div>

        </div>

        {/* RIGHT FORM SIDE */}
        <div className="signup-form-side">

          <button
          className="back-btn"
          onClick={() => window.location.href = "/"}
        >
          ← Back to Home
        </button>


          <div className="signup-card">

            <h2>Create Account</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <select>
              <option>Select Role</option>
              <option>Student</option>
              <option>Admin</option>
              <option>Auditor</option>
            </select>

            <button className="btn primary full">
              Sign Up
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
    </PageTransition>
  );
}
