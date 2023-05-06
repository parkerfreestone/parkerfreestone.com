import { Nav } from "./components/Nav";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
