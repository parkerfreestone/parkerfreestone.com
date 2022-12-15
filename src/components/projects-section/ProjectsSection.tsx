import {
  faFirefox,
  faGithub,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css";

export const ProjectsSection = () => {
  return (
    <div className="projects bg-green">
      <h2>current projects</h2>
      <div className="project-cards">
        <div className="card bg-blue">
          <h3>cosma</h3>
          <p className="sub-text-large">social media</p>
          <a
            href="https://github.com/parkerfreestone/Cosma"
            className="btn-neutral"
          >
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: ".5rem" }} />
            github
          </a>
        </div>
        {/* <div className="is-excellent">excellent! 👍</div> */}
        <div className="card bg-purple">
          <h3>kruitbosch</h3>
          <p className="sub-text-large">painting inc.</p>
          <a
            href="https://github.com/parkerfreestone/kruitbosch-painting"
            className="btn-neutral"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: ".5rem" }} />
            github
          </a>
          <a
            href="https://chimerical-begonia-f4bbf6.netlify.app/"
            className="btn-neutral"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFirefox}
              style={{ marginRight: ".5rem" }}
            />
            live
          </a>
        </div>
      </div>
    </div>
  );
};
