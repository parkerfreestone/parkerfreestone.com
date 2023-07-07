import { Nav } from "./components/Nav";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { ExperienceTimeline } from "./components/sections/ExperienceTimeline";
import { TheEnd } from "./components/sections/TheEnd";

import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Parker Freestone</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio. Discover my projects, current experience & education, and some cool repo's I'm supporting."
        />
      </Helmet>
      <header>
        <Nav />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ExperienceTimeline />
      </section>
      <footer>
        <TheEnd />
      </footer>
    </>
  );
};

export default App;
