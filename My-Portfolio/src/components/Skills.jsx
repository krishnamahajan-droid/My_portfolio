export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag"><span className="num">03</span> Skills</span>
          <h2>What's Shipped, And What's Next.</h2>
          <p>Current lane covers frontend engineering plus the Python and DSA foundation the ML pivot depends on.</p>
        </div>

        <div className="skill-grid">
          <div className="skill-card">
            <div className="icon">Fe</div>
            <h3>Frontend Engineering</h3>
            <div className="chip-row">
              <span className="chip">React.js</span>
              <span className="chip">JavaScript</span>
              <span className="chip">HTML5</span>
              <span className="chip">CSS3</span>
            </div>
          </div>

          <div className="skill-card highlight">
            <div className="icon">Py</div>
            <h3>Python &amp; Core CS</h3>
            <div className="chip-row">
              <span className="chip core">Python</span>
              <span className="chip core">Data Structures &amp; Algorithms</span>
              <span className="chip core">Problem Solving</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="icon">Tl</div>
            <h3>Tools &amp; Workflow</h3>
            <div className="chip-row">
              <span className="chip">Git / GitHub</span>
              <span className="chip">Vercel</span>
              <span className="chip">Figma</span>
            </div>
          </div>

          <div className="skill-card wide">
            <div className="icon">Ds</div>
            <h3>Building Toward — Data Science &amp; ML</h3>
            <div className="chip-row">
              <span className="chip next">NumPy</span>
              <span className="chip next">Pandas</span>
              <span className="chip next">Statistics</span>
              <span className="chip next">scikit-learn</span>
              <span className="chip next">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}