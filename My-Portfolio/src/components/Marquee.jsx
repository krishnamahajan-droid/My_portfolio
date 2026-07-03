import { marqueeItems } from "../data";

export default function Marquee() {
  // We repeat the list twice so the CSS animation can scroll forever
  // without a visible "jump" at the end.
  const doubledItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubledItems.map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
            <span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}