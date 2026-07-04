import { roadmap } from "../Data";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag"><span className="num">05</span> Roadmap</span>
          <h2>The Path From Web Dev To ML.</h2>
        </div>

        <div className="roadmap">
          {roadmap.map((step) => (
            <div className={`rm-item ${step.active ? "active" : ""}`} key={step.num}>
              <div className="rm-num">{step.num}</div>
              <div className="rm-body">
                <span className="when">{step.when}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}