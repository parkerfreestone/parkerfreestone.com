import { faFirefox, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';

const projects = [
  {
    name: 'cosma',
    subHeading: 'social media',
    githubLink: 'https://github.com/parkerfreestone/Cosma',
    color: 'bg-yellow',
  },
  {
    name: 'kruitbosch',
    subHeading: 'painting inc.',
    githubLink: 'https://github.com/parkerfreestone/kruitbosch-painting',
    liveLink: 'https://chimerical-begonia-f4bbf6.netlify.app/',
    color: 'bg-blue',
  },
  {
    name: 'vehservoir',
    subHeading: 'reservation app',
    githubLink: 'https://github.com/utahstate/vehservoir',
    liveLink: 'https://reserve.usu.edu',
    color: 'bg-purple',
  },
];

export const ProjectsSection = () => {
  return (
    <div id="projects" className="projects bg-green">
      <h2>current projects</h2>
      <div className="hobbie-cards">
        {projects.map(
          ({ name, subHeading, githubLink, liveLink, color }, i, a) => (
            <div className={`card ${color}`}>
              <h3>{name}</h3>
              <p className="sub-text-large">{subHeading}</p>
              {githubLink && (
                <a href={githubLink} className="btn-neutral">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: '.5rem' }}
                  />
                  github
                </a>
              )}
              {liveLink && (
                <a href={liveLink} className="btn-neutral">
                  <FontAwesomeIcon
                    icon={faFirefox}
                    style={{ marginRight: '.5rem' }}
                  />
                  live
                </a>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
