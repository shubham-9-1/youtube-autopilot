const navigation = [
  { label: "Overview", icon: "◫", active: true },
  { label: "Trend discovery", icon: "↗" },
  { label: "Competitor intelligence", icon: "◎" },
  { label: "AI strategy", icon: "✳" },
  { label: "Content studio", icon: "▧" },
  { label: "Video library", icon: "▤" },
  { label: "Content calendar", icon: "▦" },
  { label: "Approval center", icon: "✓" },
  { label: "Publishing", icon: "▷" },
  { label: "Analytics", icon: "⌁" },
];

const setupSteps = [
  { number: "01", title: "Connect a YouTube channel", description: "Securely connect a channel to unlock channel-aware research and publishing." },
  { number: "02", title: "Define your audience", description: "Choose your niche, target countries, languages, and preferred formats." },
  { number: "03", title: "Create your first content plan", description: "Review evidence-backed topic opportunities before generating a video." },
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-mark">Y</div>
          <div>
            <div className="brand-name">autopilot</div>
            <div className="brand-caption">YOUTUBE AI WORKSPACE</div>
          </div>
        </div>

        <div className="workspace-switcher">
          <div className="workspace-avatar">W</div>
          <div className="workspace-copy">
            <span className="muted-label">WORKSPACE</span>
            <strong>My workspace</strong>
          </div>
          <span className="switcher-chevron">⌄</span>
        </div>

        <div className="nav-section-label">WORKSPACE</div>
        <nav className="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <div key={item.label} className={`nav-item${item.active ? " active" : ""}`}>
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
              {item.label === "Approval center" && <span className="nav-dot" />}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-status"><span className="status-dot" /> All systems ready</div>
          <div className="profile-row">
            <div className="profile-avatar">U</div>
            <div className="profile-copy"><strong>Your account</strong><span>Starter workspace</span></div>
            <span className="profile-menu">···</span>
          </div>
        </div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div className="breadcrumb">Workspace <span>/</span> Overview</div>
          <div className="topbar-actions">
            <span className="environment-pill"><span className="status-dot" /> DEVELOPMENT</span>
            <span className="icon-button" aria-hidden="true">♧</span>
            <div className="topbar-avatar">U</div>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> YOUR CREATOR COMMAND CENTER</div>
              <h1>Make your next video<br /><span>your best one yet.</span></h1>
              <p className="welcome-description">Your AI-powered YouTube workspace is taking shape. Complete the setup to start discovering opportunities and building original content.</p>
            </div>
            <div className="orbit-art" aria-hidden="true">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="orbit-core"><span>Y</span></div>
              <span className="orbit-node node-one">✳</span><span className="orbit-node node-two">↗</span><span className="orbit-node node-three">▷</span>
            </div>
          </section>

          <section className="metric-grid" aria-label="Workspace metrics">
            <article className="metric-card"><div className="metric-top"><span>CONNECTED CHANNELS</span><span className="metric-symbol">◎</span></div><div className="metric-value">0</div><div className="metric-foot">Connect your first channel</div></article>
            <article className="metric-card"><div className="metric-top"><span>TOPIC OPPORTUNITIES</span><span className="metric-symbol">↗</span></div><div className="metric-value">—</div><div className="metric-foot">Waiting for channel setup</div></article>
            <article className="metric-card"><div className="metric-top"><span>VIDEOS IN PRODUCTION</span><span className="metric-symbol">▧</span></div><div className="metric-value">0</div><div className="metric-foot">Your next idea starts here</div></article>
            <article className="metric-card"><div className="metric-top"><span>AWAITING APPROVAL</span><span className="metric-symbol">✓</span></div><div className="metric-value">0</div><div className="metric-foot">You stay in control</div></article>
          </section>

          <section className="setup-card">
            <div className="section-heading">
              <div><div className="eyebrow">GETTING STARTED</div><h2>Set up your autopilot</h2><p>Three steps to prepare your content engine.</p></div>
              <div className="progress-label"><strong>0%</strong><span>COMPLETE</span></div>
            </div>
            <div className="progress-track"><div className="progress-fill" /></div>
            <div className="setup-list">
              {setupSteps.map((step) => (
                <article className="setup-step" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-copy"><h3>{step.title}</h3><p>{step.description}</p></div>
                  <span className="step-status">NOT STARTED</span>
                  <span className="step-arrow">→</span>
                </article>
              ))}
            </div>
          </section>

          <footer className="page-footer"><span>YOUTUBE AUTOPILOT <span className="footer-separator">·</span> FOUNDATION BUILD</span><span>Research with purpose. Publish with confidence.</span></footer>
        </div>
      </section>
    </main>
  );
}
