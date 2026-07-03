export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag"><span className="num">01</span> About</span>
          <h2>A Builder Rewiring Toward Data.</h2>
        </div>

        <div className="bento">
          <div className="card about-main">
            <p>
              <b>Krishna Mahajan</b> is currently entering the second year of a B.Tech in
              Computer Science Engineering. Most work so far has been on the web: React,
              HTML/CSS, and UI/UX, sharpened through an internship at Decode Labs.
            </p>
            <p>
              The next stretch is a deliberate pivot — keeping the engineering instincts already
              built, while layering in Python, Data Structures &amp; Algorithms, and machine
              learning fundamentals.
            </p>
          </div>

          <div className="card stat-card">
            <b>8.43</b>
            <span>Current CGPA</span>
          </div>

          <div className="card stat-card">
            <b>2nd Year</b>
            <span>B.Tech, CSE</span>
          </div>

          <div className="card info-card">
            <div className="info-grid">
              <div className="info-item"><span className="k">Degree</span><span className="v">B.Tech, Computer Science Engineering</span></div>
              <div className="info-item"><span className="k">Experience</span><span className="v">Internship — Decode Labs</span></div>
              <div className="info-item"><span className="k">Current Lane</span><span className="v">Frontend Development, Python &amp; DSA</span></div>
              <div className="info-item"><span className="k">Target Lane</span><span className="v">Data Science &amp; Machine Learning</span></div>
              <div className="info-item"><span className="k">Tooling</span><span className="v">Git, GitHub, Vercel, Figma</span></div>
              <div className="info-item"><span className="k">Status</span><span className="v">Open To Internships</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}