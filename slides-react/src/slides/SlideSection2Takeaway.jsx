const SlideSection2Takeaway = () => (
  <>
    <div className="section-header">
      <span className="section-badge section2">Section 2</span>
      <span className="phase-badge">Takeaway</span>
    </div>
    <h2>It Was Working For You the Whole Time</h2>
    <div className="hero-callout">
      <div className="hero-text">
        The best teams don't just <em>use</em> Cursor — they{' '}
        <span className="hero-highlight">
          teach it how their team works
        </span>.
      </div>
    </div>
    <div className="tiles">
      <div className="tile orange">
        <div className="takeaway-label" style={{ color: 'var(--orange)' }}>
          Remember Being Lost?
        </div>
        <div className="tile-title">
          <span className="highlight-orange">
            You understood a stranger's code in minutes
          </span>
        </div>
        <ul className="tile-bullets">
          <li>Opened someone else's project with zero context</li>
          <li>Ask Mode got you oriented in minutes, not weeks</li>
          <li>This is what faster onboarding actually looks like</li>
        </ul>
      </div>
      <div className="tile orange">
        <div className="takeaway-label" style={{ color: 'var(--orange)' }}>
          The Invisible Helpers
        </div>
        <div className="tile-title">
          <span className="highlight-orange">
            Skills, Hooks, Bugbot, and MCPs were working behind the scenes
          </span>
        </div>
        <ul className="tile-bullets">
          <li><strong>Skill:</strong> Git explained in plain English</li>
          <li><strong>Hook:</strong> Blocked commits without a team file</li>
          <li><strong>MCP:</strong> PRD written straight to Notion from Cursor</li>
          <li>Someone configured all of this before you walked in</li>
        </ul>
      </div>
      <div className="tile orange">
        <div className="takeaway-label" style={{ color: 'var(--orange)' }}>
          You Leveled Up
        </div>
        <div className="tile-title">
          <span className="highlight-orange">
            In Section 1 you used AI. In Section 2 you taught it.
          </span>
        </div>
        <ul className="tile-bullets">
          <li>Created a Rule, a Skill, and a Hook — your own guardrails</li>
          <li>Senior engineers' knowledge stays even when they leave</li>
          <li>The AI carries the standards forward automatically</li>
        </ul>
      </div>
    </div>
    <div className="emphasis-box orange">
      <strong>The takeaway:</strong> Any AI tool can generate code. The
      difference is whether you can teach it your team's way of working —
      so every developer gets the same quality bar, automatically.
    </div>
  </>
)

export default SlideSection2Takeaway
