import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <ParticleBackground />
      <div className="wrap">
        <div className="hero-content">
          <span className="eyebrow">Open To Internships &amp; Collaborations</span>
          <h1>
            Krishna Mahajan Builds <span className="grad-text">Interfaces</span>, And Is
            Learning To Build <span className="grad-text">Intelligence</span>.
          </h1>
          <p className="role">
            B.Tech Computer Science student and frontend developer, deliberately rebuilding
            toward <b>Data Science and Machine Learning</b>.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">View Projects →</a>
            <a className="btn btn-outline" href="https://github.com/krishnamahajan-droid" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/krishna-mahajan-92b615311" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  );
}