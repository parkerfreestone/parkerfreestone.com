import { useEffect, useRef } from "react";

import Landing from "../../assets/projects/wasatch-pressure-pros/landing.png";
import Services from "../../assets/projects/wasatch-pressure-pros/services.png";
import FAQ from "../../assets/projects/wasatch-pressure-pros/faq.png";

import Auth from "../../assets/projects/highland/auth.png";
import DashboardOne from "../../assets/projects/highland/dashboard1.png";
import DashboardTwo from "../../assets/projects/highland/dashboard2.png";

import UserAuth from "../../assets/projects/cosma/auth.png";
import Explore from "../../assets/projects/cosma/explore.png";
import Profile from "../../assets/projects/cosma/profile.png";

import { ArrowUpRight, Construction, Github } from "lucide-react";

type ProjectProps = {
  projectId: number;
  alignRight: boolean;
  slides: string[];
  projectInfo: Record<string, any>;
};

export const Projects = () => {
  return (
    <div id="projects" className="bg-base-200 py-12">
      <div className="p-6 max-w-7xl m-auto">
        <h2 className="text-5xl font-bold">Projects</h2>

        <Project
          projectId={1}
          alignRight={false}
          slides={[Landing, Services, FAQ]}
          projectInfo={project1Info}
        />
        <Project
          projectId={2}
          alignRight={true}
          slides={[Profile, Explore, UserAuth]}
          projectInfo={project2Info}
        />
        <Project
          projectId={3}
          alignRight={false}
          slides={[Auth, DashboardOne, DashboardTwo]}
          projectInfo={project3Info}
        />
      </div>
    </div>
  );
};

const Project = ({
  projectId,
  alignRight,
  slides,
  projectInfo,
}: ProjectProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (targetImageNumber: number) => {
    if (carouselRef.current) {
      let carouselWidth = carouselRef.current.clientWidth;
      let targetImage = targetImageNumber - 1;
      let targetXPixel = carouselWidth * targetImage;

      carouselRef.current.scrollTo(targetXPixel, 0);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo(0, 0);
    }
  }, [slides]);

  return (
    <div
      id="projects"
      className={`flex flex-col my-10 lg:my-20 rounded-2xl bg-base-100  ${
        alignRight ? "lg:flex-row-reverse text-start" : "lg:flex-row"
      } gap-6 mb-12`}
      data-aos={alignRight ? "fade-left" : "fade-right"}
      data-aos-delay="50"
    >
      <div className="flex justify-center items-center w-full lg:w-3/5">
        <div
          ref={carouselRef}
          className="carousel rounded-2xl w-full border border-base-200"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              id={`project${projectId}slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <img src={slide} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button
                  onClick={() =>
                    scrollCarousel(index === 0 ? slides.length : index)
                  }
                  className="btn btn-circle"
                >
                  ❮
                </button>
                <button
                  onClick={() =>
                    scrollCarousel(index + 2 > slides.length ? 1 : index + 2)
                  }
                  className="btn btn-circle"
                >
                  ❯
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full lg:w-2/5 flex flex-col justify-center p-8`}>
        {projectInfo?.inDevelopment && (
          <div className="badge badge-lg badge-warning gap-2 mb-2">
            <Construction /> In Development
          </div>
        )}
        <h3 className="text-3xl font-bold">{projectInfo.title}</h3>
        <p className="py-6 text-xl">{projectInfo.description}</p>
        <div className="flex gap-2">
          {projectInfo.liveLink ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary gap-2"
              href={projectInfo.liveLink}
            >
              Hosted Site
              <ArrowUpRight />
            </a>
          ) : (
            <div data-tip="Too poor to buy another VPS :(" className="tooltip">
              <button disabled className="flex btn btn-primary gap-2 tooltip">
                Hosted Site
                <ArrowUpRight />
              </button>
            </div>
          )}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2"
            href={projectInfo.githubLink}
          >
            Github
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

const project1Info = {
  title: "Wasatch Pressure Pros",
  description:
    "Wasatch Pressure Pros is a responsive single-page application for a pressure washing business. Built with React and Tailwind CSS, it delivers a seamless experience through smooth animations and intuitive design, effectively connecting the business with its audience",
  githubLink: "https://github.com/parkerfreestone/wasatch-pressure-pros",
  liveLink: "https://wasatchpressurepros.com",
};

const project2Info = {
  title: "COSMA",
  description:
    "COSMA is asocial media app inspired by Twitter and TRUTH Social, it utilizes modern technologies like React, Nestjs, TypeScript, Chakra UI, PostgreSQL, and TypeORM.",
  githubLink: "https://github.com/parkerfreestone/cosma",
};

const project3Info = {
  title: "Highland E-Commerce Platform",
  description:
    "The Highland e-commerce app ensures a seamless shopping experience for customers and a user-friendly admin platform. Powered by Remix, Prisma, PostgreSQL, and Cloudflare.",
  githubLink: "https://github.com/highland-hq/ecommerce-platform",
  liveLink: "https://highlandhq.com",
  inDevelopment: true,
};
