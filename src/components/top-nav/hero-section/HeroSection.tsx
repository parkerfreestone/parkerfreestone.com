import HeroGraphic from "../../../graphics/ux-ui-graphic.svg";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="grid-container">
      <div className="left-hero-item">
        <h2>full-stack</h2>
        <h3 className="sub-text">website developer</h3>
        <div className="keep-scrolling-badge">
          <p>psst... keep scrolling!</p>
        </div>
      </div>
      <div className="right-hero-item">
        <h2 className="ux-text">ux/ui designer</h2>
        <img
          src={HeroGraphic}
          alt="Graphic of a text editor, and grpahic program."
        />
      </div>
    </div>
  );
};