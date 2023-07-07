import { Github, Linkedin } from "lucide-react";
import Computer from "../../assets/3d-computer.png";

export const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
        <img
          data-aos="fade-left"
          data-aos-delay="500"
          src={Computer}
          className="w-full max-w-sm"
        />
        <div>
          <h1
            data-aos="fade-up"
            className="text-4xl lg:text-8xl font-bold text-center"
          >
            Full-Stack Website Developer
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="py-6 text-xl text-center"
          >
            👋 Hello, I'm Parker Freestone! Don't hesitate to reach out I would
            love to connect
            <br /> and potentially collaberate!
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-center"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              href="https://github.com/parkerfreestone"
            >
              <Github />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/parker-freestone-b9978b211/"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
