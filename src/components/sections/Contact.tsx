export const Contact = () => {
  return (
    <div id="contact" className="py-12">
      <div className="p-6 max-w-7xl m-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="card bg-base-200 shadow-lg rounded-lg text-primary-content">
          <div className="card-body">
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input text-base w-full rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input text-base w-full rounded-lg"
                />
              </div>
              <textarea
                placeholder="Comment"
                className="textarea textarea-lg w-full text-base rounded-lg"
              ></textarea>
              <button className="btn btn-primary mt-6 w-full md:w-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
