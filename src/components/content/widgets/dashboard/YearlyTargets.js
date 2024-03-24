const YearlyTargets = () => {
  return (
    <div className="targets p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Yearly Targets</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Targets Of The Year</p>
      <div className="target-row mb-20 blue center-flex">
        <div className="icon center-flex">
          <i className="fa-solid fa-dollar-sign fa-lg c-blue"></i>
        </div>
        <div className="details">
          <span className="fs-14 c-grey">Money</span>
          <span className="d-block mt-5 mb-10 fw-bold">$20.000</span>
          <div className="progress p-relative">
            <span className="bg-mainColor blue" style={{ width: "80%" }}>
              <span className="bg-mainColor">80%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="target-row mb-20 center-flex orange">
        <div className="icon center-flex">
          <i className="fa-solid fa-code fa-lg c-orange"></i>
        </div>
        <div className="details">
          <span className="fs-14 c-grey">Projects</span>
          <span className="d-block mt-5 mb-10 fw-bold">24</span>
          <div className="progress p-relative">
            <span
              className="bg-orange orange"
              style={{
                width: "55%",
              }}
            >
              <span className="bg-orange">55%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="target-row mb-20 center-flex green">
        <div className="icon center-flex">
          <i className="fa-solid fa-user fa-lg c-green"></i>
        </div>
        <div className="details">
          <span className="fs-14 c-grey">Team</span>
          <span className="d-block mt-5 mb-10 fw-bold">12</span>
          <div className="progress p-relative">
            <span className="bg-green green" style={{ width: "75%" }}>
              <span className="bg-green">75%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyTargets;
