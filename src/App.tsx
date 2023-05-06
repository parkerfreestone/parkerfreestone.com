import { Nav } from "./components/Nav";
import { Contact } from "./components/sections/Contact";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
