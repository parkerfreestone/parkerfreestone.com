import Code from "../../assets/code.jpg";

export const Projects = () => {
  return (
    <div id="projects" className="bg-base-200 py-12">
      <div className="p-6 max-w-7xl m-auto">
        <h2 className="text-5xl font-bold">Projects</h2>
        <div className="flex-col">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={Code} alt="Album" className="max-h-sm" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">COSMA</h2>
              <p></p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
