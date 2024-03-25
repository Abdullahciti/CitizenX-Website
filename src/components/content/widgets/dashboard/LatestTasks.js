import TaskCard from "./tasks/TaskCard";

const LatestTasks = ({ handleTasks }) => {
  const handleDone = (e) => {
    e.target.parentElement.classList.toggle("done");
  };
  const handleDelete = (e) => {
    e.target.parentElement.remove();
  };
  const handleLength = (e) => {
    const tasksContainer = document.querySelector(".tasks-container");
    const numberOfTasks = tasksContainer.children.length;
    if (numberOfTasks === 0) {
      handleTasks();
    }
  };

  return (
    <div className="tasks p-20 bg-mainMode rad-10">
      <h2 className="mt-0 mb-20">Latest Tasks</h2>
      <div className="tasks-container" onClick={(e) => handleLength(e)}>
        <TaskCard
          title={"Applying for a job"}
          desc={
            "I'm looking forward to finding a job to start my new amazing career where I'd like to work."
          }
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
        <TaskCard
          title={"Write Article"}
          desc={"Write about how it started and my remaining goals."}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
        <TaskCard
          title={"Finish my main project"}
          desc={"Publish the CitizenX-Website project."}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
        <TaskCard
          title={"German B2"}
          desc={
            "Receive the B2 certificate indicating that I passed successfully."
          }
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
        <TaskCard
          title={"Start learning Next.js"}
          desc={
            "Start creating some simple projects after finishing learning Next.js."
          }
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      </div>
    </div>
  );
};

export default LatestTasks;
