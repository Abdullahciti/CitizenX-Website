import { activityOne, activityThree, activityTwo, project } from "../../../../assets";

const Activity = () => {
  return (
    <div className="activities p-20 bg-white rad-10 mt-20">
      <h2 className="mt-0 mb-10">Latest Activities</h2>
      <p className="mt-0 mb-20 c-grey fs-15">
        Latest Activities Done By The User
      </p>
      <div className="activity d-flex align-center txt-c-mobile">
        <img decoding="async" src={activityOne} alt="" />
        <div className="info">
          <span className="d-block mb-10">U-demy</span>
          <span className="c-grey">Bought the react routing 2023 course</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">04:00 PM</span>
          <span className="c-grey">March 10, 2024</span>
        </div>
      </div>
      <div className="activity d-flex align-center txt-c-mobile">
        <img decoding="async" src={activityTwo} alt="" />
        <div className="info">
          <span className="d-block mb-10">VhS</span>
          <span className="c-grey">Completed The B2 German Course</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">9:30 AM</span>
          <span className="c-grey">March 2, 2024</span>
        </div>
      </div>
      <div className="activity d-flex align-center txt-c-mobile">
        <img decoding="async" src={activityThree} alt="" />
        <div className="info">
          <span className="d-block mb-10">CtitzenX Website</span>
          <span className="c-grey">Found a hosting server</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">06:05 PM</span>
          <span className="c-grey">Yesterday</span>
        </div>
      </div>
      <div className="activity d-flex align-center txt-c-mobile">
        <img decoding="async" src={project} alt="" />
        <div className="info">
          <span className="d-block mb-10">Project</span>
          <span className="c-grey">Finished my Portofolio</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">just now</span>
          <span className="c-grey">Today</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
