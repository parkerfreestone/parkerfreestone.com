import {
  faFilm,
  faGamepad,
  faSnowboarding,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from './skills';

const hobbies = [
  {
    heading: 'skate',
    icon: faSnowboarding,
    color: 'bg-purple',
  },
  {
    heading: 'game',
    icon: faGamepad,
    color: 'bg-green',
  },
  {
    heading: 'anime',
    icon: faFilm,
    color: 'bg-yellow',
  },
];

export const AboutSection = () => {
  return (
    <>
      <div id="aboutme" className="container bg-blue">
        <h2>about me</h2>
        <p className="sub-text-large">
          hey! i am a programmer passionate about new technology, and
          implementing web-based solutions to solve problems
        </p>
        <h2>skills</h2>
        {skills.map((skill) => (
          <div className="chip">{skill.toLowerCase()}</div>
        ))}
        <div className="chip">+ probably more that i forgot...</div>
      </div>

      <div className="container">
        <h2>outside of work</h2>
        <p className="sub-text-large">
          crazy to say, but i don't just write code
        </p>
        <div className="col-3">
          {hobbies.map(({ heading, icon, color }, i, a) => (
            <div
              className={`card ${color} ${
                i === Math.floor(a.length / 2)
                  ? 'middle-card'
                  : i === 0
                  ? 'start-card'
                  : i === a.length - 1
                  ? 'end-card'
                  : null
              }`}
            >
              <h3 className="card-header">{heading}</h3>
              <FontAwesomeIcon size="5x" icon={icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
