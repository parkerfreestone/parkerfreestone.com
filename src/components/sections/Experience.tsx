import Code from "../../assets/code.jpg";

export const Experience = () => {
  return (
    <div id="experience" className="bg-base py-12">
      <div className="flex gap-12 p-6 max-w-7xl m-auto">
        <img src={Code} className="max-w-md rounded-xl shadow-lg" />
        <div>
          <h2 className="text-5xl font-bold">About Me ✨</h2>
          <p className="py-6 text-xl">
            I'm currently a Junior Developer at UC, Riverside. I'm passionate
            about coding, design, anime, free software (Arch btw), and
            skateboarding. As a developer, I aim to create meaningful tech
            solutions while infusing my unique perspective from my personal life
            into my work.
          </p>
          <p className="py-6 text-xl">
            {" "}
            Fueled by my love for coffee, I'm always eager to learn and take on
            new challenges. Explore my portfolio to see my projects, and feel
            free to connect with me to chat or discuss new opportunities!
          </p>
        </div>
      </div>
    </div>
  );
};
