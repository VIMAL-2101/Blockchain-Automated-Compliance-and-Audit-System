import './App.css'

function App() {
  return (
    <div className="app">
      <header className="top-nav">
        <div className="brand">
          <div className="brand-mark">AC</div>
          <div>
            <p className="brand-title">AuditChain</p>
            <p className="brand-subtitle">Automated Compliance Suite</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#workflow">Workflow</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="ghost-btn">Log in</button>
          <button className="primary-btn">Get Started</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="pill">Blockchain-powered compliance intelligence</span>
            <h1>
              Deliver audit-ready reports in <span>minutes</span>, not weeks.
            </h1>
            <p>
              Automate evidence collection, monitor regulatory changes, and
              visualize risk across every department from a single
              compliance command center.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">Launch Live Demo</button>
              <button className="ghost-btn">Download Overview</button>
            </div>
            <div className="hero-metrics">
              <div>
                <h3>98%</h3>
                <p>Audit readiness score</p>
              </div>
              <div>
                <h3>24/7</h3>
                <p>Policy drift detection</p>
              </div>
              <div>
                <h3>60%</h3>
                <p>Faster reporting cycles</p>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <p className="panel-title">Compliance Pulse</p>
              <h2>Unified audit timeline</h2>
              <p>
                Track evidence on-chain, receive alerts, and export regulator-ready
                packets instantly.
              </p>
              <div className="panel-grid">
                <div>
                  <span>Risk Level</span>
                  <strong>Low</strong>
                </div>
                <div>
                  <span>Controls Verified</span>
                  <strong>142</strong>
                </div>
                <div>
                  <span>Open Tasks</span>
                  <strong>08</strong>
                </div>
                <div>
                  <span>Next Audit</span>
                  <strong>15 Days</strong>
                </div>
              </div>
            </div>
            <div className="panel-card glass">
              <p>“Finally a compliance dashboard the whole team understands.”</p>
              <div className="avatar-row">
                <div className="avatar"></div>
                <div>
                  <strong>Maya Sterling</strong>
                  <span>Chief Risk Officer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="feature-section">
          <div className="section-heading">
            <h2>Everything regulators ask for, already organized.</h2>
            <p>
              Map policies to frameworks, auto-collect evidence, and keep every
              update traceable with blockchain verification.
            </p>
          </div>
          <div className="feature-grid">
            <article>
              <h3>Policy Intelligence</h3>
              <p>
                Track global regulatory changes and auto-sync them with your
                internal controls in real time.
              </p>
            </article>
            <article>
              <h3>Evidence Vault</h3>
              <p>
                Secure documentation with immutable timestamps and instant audit
                trails.
              </p>
            </article>
            <article>
              <h3>Risk Heatmaps</h3>
              <p>
                Prioritize remediation with AI-generated risk scoring and team
                accountability.
              </p>
            </article>
          </div>
        </section>

        <section id="workflow" className="workflow">
          <div>
            <h2>Streamlined from intake to sign-off.</h2>
            <p>
              Replace spreadsheets with a guided workflow that keeps every
              stakeholder aligned.
            </p>
          </div>
          <div className="workflow-steps">
            <div>
              <span>01</span>
              <h4>Collect</h4>
              <p>Auto-ingest evidence from HR, finance, and vendor tools.</p>
            </div>
            <div>
              <span>02</span>
              <h4>Validate</h4>
              <p>Blockchain-backed checkpoints ensure proof is tamper-free.</p>
            </div>
            <div>
              <span>03</span>
              <h4>Report</h4>
              <p>Generate auditor-friendly exports in one click.</p>
            </div>
          </div>
        </section>

        <section id="insights" className="insights">
          <div className="insights-card">
            <h3>Insight Dashboard</h3>
            <p>Weekly compliance summary</p>
            <ul>
              <li>34 tasks completed</li>
              <li>12 approvals pending</li>
              <li>0 critical alerts</li>
            </ul>
          </div>
          <div className="insights-card highlight">
            <h3>Upcoming audits</h3>
            <p>Prepare with confidence</p>
            <strong>FINRA • SOC 2 • ISO 27001</strong>
            <button className="ghost-btn">View calendar</button>
          </div>
          <div className="insights-card">
            <h3>Stakeholder view</h3>
            <p>Share the right data with each team</p>
            <ul>
              <li>Legal: policy mapping</li>
              <li>IT: control status</li>
              <li>Finance: audit exports</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="cta">
          <div>
            <h2>Ready to modernize compliance?</h2>
            <p>
              Join forward-thinking enterprises that trust AuditChain to stay
              continuously audit-ready.
            </p>
          </div>
          <button className="primary-btn">Book a strategy call</button>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h4>AuditChain</h4>
          <p>Blockchain Automated Compliance & Audit System</p>
        </div>
        <div>
          <span>Security</span>
          <span>Trust Center</span>
          <span>Privacy</span>
        </div>
      </footer>
    </div>
  )
}

export default App
