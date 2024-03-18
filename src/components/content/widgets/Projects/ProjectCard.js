const ProjectCard = ({ teamOne, teamTwo, teamThree, teamFour, teamFive }) => {
  return (
    <div className="project bg-white p-20 rad-6 p-relative">
    <span className="date fs-13 c-grey">15/10/2021</span>
    <h4 className="m-0">TopC Dashboard</h4>
    <p className="c-grey mt-10 mb-10 fs-14">
      CitizenX Website with dashboard using react
    </p>
    <div className="team">
      <a href="#1">
        <img decoding="async" src={teamOne} alt="" />
      </a>
      <a href="#1">
        <img decoding="async" src={teamTwo} alt="" />
      </a>
      <a href="#1">
        <img decoding="async" src={teamThree} alt="" />
      </a>
      <a href="#1">
        <img decoding="async" src={teamFour} alt="" />
      </a>
      <a href="#1">
        <img decoding="async" src={teamFive} alt="" />
      </a>
    </div>
    <div className="do d-flex">
      <span className="fs-13 rad-6 bg-eee">Programming</span>
      <span className="fs-13 rad-6 bg-eee">Design</span>
      <span className="fs-13 rad-6 bg-eee">Hosting</span>
      <span className="fs-13 rad-6 bg-eee">Marketing</span>
    </div>
    <div className="info between-flex">
      <div className="prog bg-eee">
        <span className="bg-red w-50" data-width="150"></span>
      </div>
      <div className="fs-14 c-grey">
        <i className="fa-solid fa-dollar-sign"></i>
        2500
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;
