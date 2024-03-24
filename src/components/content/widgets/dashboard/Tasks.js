const Tasks = () => {
  return (
    <div className="tasks p-20 bg-white rad-10">
      Here are the corrected tasks:

1. ****: ""

2. ****: ""

3. **Finish my main project**: ""

4. ****: ""

5. ****: ""
      <h2 className="mt-0 mb-20">Latest Tasks</h2>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Apply to a job</h3>
          <p className="m-0 c-grey">I'm looking forward to finding a job to start my new amazing career where I'd like to work.</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Write Article</h3>
          <p className="m-0 c-grey">Write about how it started and my remaining goals.</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Finish my main project</h3>
          <p className="m-0 c-grey">Publish the CitizenX-Website project.</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex done">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">German B2</h3>
          <p className="m-0 c-grey">
          Receive the B2 certificate indicating that I passed successfully.
          </p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
      <div className="task-row between-flex">
        <div className="info">
          <h3 className="mt-0 mb-5 fs-15">Start learning Next.js</h3>
          <p className="m-0 c-grey">Start creating some simple projects after finishing learning Next.js.</p>
        </div>
        <i className="fa-regular fa-trash-can delete"></i>
      </div>
    </div>
  );
};

export default Tasks;
