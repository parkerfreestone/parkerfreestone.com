export const Contact = () => {
  return (
    <div id="contact" className="bg-base py-12">
      <div className="p-6 max-w-7xl m-auto">
        <h2 className="text-5xl font-bold">Contact Me</h2>
        <div className="card bg-base-200 shadow-lg text-primary-content mt-12">
          <div className="card-body">
            <form>
              <div className="flex gap-6 mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input w-full shadow-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input w-full shadow-md"
                />
              </div>
              <textarea
                placeholder="Comment"
                className="textarea textarea-lg w-full shadow-md"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
