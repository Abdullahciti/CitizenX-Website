const Reminders = () => {
  return (
    <div className="reminders p-20 bg-mainMode rad-10 p-relative">
      <h2 className="mt-0 mb-25">Reminders</h2>
      <ul className="m-0">
        <li className="d-flex align-center mt-15">
          <span className="key bg-blue mr-15 d-block rad-half"></span>
          <div className="pl-15 blue">
            <p className="fs-14 fw-bold mt-0 mb-5">Check my tasks list</p>
            <span className="fs-13 c-grey">28/01/2024 - 8:00am</span>
          </div>
        </li>
        <li className="d-flex align-center mt-15">
          <span className="key bg-green mr-15 d-block rad-half"></span>
          <div className="pl-15 green">
            <p className="fs-14 fw-bold mt-0 mb-5">Maintenance my current project</p>
            <span className="fs-13 c-grey">31/01/2024 - 12:00am</span>
          </div>
        </li>
        <li className="d-flex align-center mt-15">
          <span className="key bg-orange mr-15 d-block rad-half"></span>
          <div className="pl-15 orange">
            <p className="fs-14 fw-bold mt-0 mb-5">Call my target company where i dream to work</p>
            <span className="fs-13 c-grey">05/4/2024 - 13:00pm</span>
          </div>
        </li>
        <li className="d-flex align-center mt-15">
          <span className="key bg-red mr-15 d-block rad-half"></span>
          <div className="pl-15 red">
            <p className="fs-14 fw-bold mt-0 mb-5">
            Finish the development of the Portfolio
            </p>
            <span className="fs-13 c-grey">20/03/2024 - 11:00pm</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Reminders;
