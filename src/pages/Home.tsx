import { AboutSection } from "../components/about-section/About";
import { HeroSection } from "../components/hero-section/HeroSection";
import { ProjectsSection } from "../components/projects-section/ProjectsSection";
import { TopNav } from "../components/top-nav/TopNav";

export const Home = () => {
  return (
    <div>
      <TopNav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};
