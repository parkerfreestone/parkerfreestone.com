import React from "../../assets/logos/react-logo.png";
import Tailwind from "../../assets/logos/tailwind-logo.png";
import Postgres from "../../assets/logos/postgres-logo.png";

export const About = () => {
  return (
    <div id="experience" className="bg-base py-24">
      <div className="flex gap-12 p-6 max-w-7xl m-auto">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i about-me</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
        <div>
          <h2 className="text-5xl font-bold">About Me 📝</h2>
          <p className="py-6 text-xl">
            I'm currently a Junior Developer at UC, Riverside. I'm passionate
            about coding, design, anime, free software (Arch btw), and
            skateboarding. As a developer, I aim to create meaningful tech
            solutions while infusing my unique perspective from my personal life
            into my work.
          </p>
          <p className="py-6 text-xl">
            Fueled by my love for coffee, I'm always eager to learn and take on
            new challenges. Explore my portfolio to see my projects, and feel
            free to connect with me to chat or discuss new opportunities!
          </p>
        </div>
      </div>
    </div>
  );
};
