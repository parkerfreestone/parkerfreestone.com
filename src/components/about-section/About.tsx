import {
  faFilm,
  faGamepad,
  faSnowboarding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";

export const AboutSection = () => {
  return (
    <>
      <div className="about bg-blue">
        <h2>about me</h2>
        <p className="sub-text-large">
          hey! i am a programmer passionate about new technology, and
          implementing web-based <br /> solutions to solve problems
        </p>
      </div>
      <div className="hobbies">
        <h2>outside of work</h2>
        <p className="sub-text-large">
          crazy to say, but i don't just write code
        </p>
        <div className="hobbie-cards">
          <div className="card bg-green">
            <h3 className="card-header">skate</h3>
            <FontAwesomeIcon size="5x" icon={faSnowboarding} />
          </div>
          <div className="card bg-blue">
            <h3 className="card-header">game</h3>
            <FontAwesomeIcon size="5x" icon={faGamepad} />
          </div>
          <div className="card bg-purple">
            <h3 className="card-header">anime</h3>
            <FontAwesomeIcon size="5x" icon={faFilm} />
          </div>
        </div>
      </div>
    </>
  );
};
