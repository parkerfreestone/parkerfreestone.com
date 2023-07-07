import { Code } from "lucide-react";

const repoData = [
  {
    name: "Anisense",
    description:
      "Personalized anime discovery and AI-powered recommendations platform.",
    link: "https://github.com/parkerfreestone/anisense",
  },
  {
    name: "Bard",
    description:
      "Cross-Platform Music Sharing: Effortlessly share and sync your favorite tracks and playlists.",
    link: "https://github.com/parkerfreestone/bard",
  },
  {
    name: "Blocking Bad",
    description:
      "A sort of 'parody' mod for minecraft, which allows you to mimic the behavior of the show breaking bad.",
    link: "https://github.com/parkerfreestone/BlockingBad",
  },
];

export const TheEnd = () => {
  return (
    <div id="repository" className="py-12 bg-base-200">
      <div className="p-6 max-w-7xl m-auto">
        <h2 className="text-5xl font-bold text-center">That's All...</h2>
        <p className="text-lg text-center mt-3 mb-12">
          However, you're in luck. Here are some other projects I'm working on!
          They aren't finished but you can feel free to take a look.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repoData.map((repo, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{repo.name}</h2>
                <p>{repo.description}</p>
                <div className="card-actions mt-2">
                  <a href={repo.link} className="btn btn-primary btn-sm gap-2">
                    <Code size={20} />
                    <span>View Repo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
