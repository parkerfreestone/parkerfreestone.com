import TerminalAnimation from "../TerminalAnimation";

export const About = () => {
  return (
    <div id="about me" className="bg-base py-32">
      <div className="flex flex-col lg:flex-row gap-12 p-6 max-w-7xl m-auto">
        <TerminalAnimation />
        <div>
          <h2
            data-aos="fade-right"
            data-aos-delay="50"
            className="text-4xl lg:text-5xl font-bold text-center lg:text-left"
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="py-6 text-xl lg:text-left"
          >
            I'm currently a Junior Developer at UC, Riverside. I'm passionate
            about coding, design, anime, free software (Arch btw), and
            skateboarding. As a developer, I aim to create meaningful tech
            solutions while infusing my unique perspective from my personal life
            into my work.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="py-6 text-xl lg:text-left"
          >
            Fueled by my love for coffee, I'm always eager to learn and take on
            new challenges. Explore my portfolio to see my projects, and feel
            free to connect with me to chat or discuss new opportunities!
          </p>
        </div>
      </div>
    </div>
  );
};
