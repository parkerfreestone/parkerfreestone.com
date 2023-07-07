import { Briefcase, GraduationCap } from "lucide-react";

const journeyData = [
  {
    type: "Experience",
    title: "Affiliate Junior Developer",
    company: "University Of California, Riverside",
    period: "February 2023 - Present",
  },
  {
    type: "Experience",
    title: "Student Software Engineer",
    company: "Utah State University",
    period: "May 2022 - February 2023",
  },
  {
    type: "Experience",
    title: "Website Technician",
    company: "Utah State University",
    period: "September 2021 - May 2022",
  },
  {
    type: "Education",
    title: "Computer Science Bachelors (On Hold)",
    company: "Utah State University",
    period: "August 2021 - May 2022",
  },

  {
    type: "Experience",
    title: "Clerk",
    company: "Internal Revenue Service",
    period: "July 2020 - March 2021",
  },
  {
    type: "Experience",
    title: "Cap-2 Associate",
    company: "Walmart",
    period: "January 2020 - July 2020",
  },
  {
    type: "Education",
    title: "High School Student",
    company: "Fremont High School",
    period: "August 2019 - May 2021",
  },
];

export const ExperienceTimeline = () => {
  return (
    <div id="experience" className="py-12">
      <div className="p-6 max-w-xl m-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Experience
        </h2>
        <div className="relative">
          <div
            className="border-l-2 border-gray-200 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"
            data-aos="fade-right"
          ></div>
          <ul className="space-y-24">
            {journeyData.map((journeyItem, index) => (
              <li
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } relative`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={index * 100}
              >
                <div
                  className={`card bg-base-200 shadow-xl flex-1 ${
                    index % 2 === 0 ? "md:ml-auto text-right" : "md:mr-auto"
                  }`}
                >
                  <div className="card-body flex flex-col items-center">
                    <span
                      className={`${
                        journeyItem.type.toLowerCase() === "education"
                          ? "badge-secondary"
                          : "badge-primary"
                      } inline-block gap-2 badge badge-lg mb-2`}
                    >
                      <div className="flex gap-2">
                        <span>{journeyItem.type}</span>
                        {journeyItem.type.toLowerCase() === "education" ? (
                          <GraduationCap size={20} />
                        ) : (
                          <Briefcase size={20} />
                        )}
                      </div>
                    </span>
                    <h3 className="card-title text-xl md:text-2xl font-bold">
                      {journeyItem.title}
                    </h3>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-600">
                      {journeyItem.company}
                    </h4>
                    <h5 className="text-base md:text-lg text-gray-500">
                      {journeyItem.period}
                    </h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
