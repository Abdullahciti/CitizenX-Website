const TaskCard = ({ title, desc, handleDone, handleDelete }) => {
  return (
    <div className="task-row between-flex">
      <div className="info">
        <h3 className="mt-0 mb-5 fs-15">{title}</h3>
        <p className="m-0 c-grey">{desc}</p>
      </div>
      <i className="fa-solid fa-austral-sign sign" onClick={(e) => handleDone(e)}></i>
      <i
        className="fa-regular fa-trash-can delete"
        onClick={(e) => handleDelete(e)}
      ></i>
    </div>
  );
};

export default TaskCard;
