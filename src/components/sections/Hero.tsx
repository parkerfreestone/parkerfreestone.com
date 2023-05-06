import { Github, Linkedin } from "lucide-react";
import Computer from "../../assets/3d-computer.png";

export const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Computer} className="max-w-sm" />
        <div>
          <h1 className="text-8xl font-bold">Full-Stack Website Developer</h1>
          <p className="py-6 text-xl">
            Hello there, I'm Parker Freestone. Don't hesitate to reach out I
            would love to connect
            <br /> and potentially collaberate! 🚩
          </p>
          <div className="">
            <button className="btn btn-ghost">
              <Github />
            </button>
            <button className="btn btn-ghost">
              <Linkedin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
