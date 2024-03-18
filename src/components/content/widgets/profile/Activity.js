import { activityOne, activityThree, activityTwo } from "../../../../assets";

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
          <span className="d-block mb-10">Store</span>
          <span className="c-grey">Bought The Mastering Python Course</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">18:10</span>
          <span className="c-grey">Yesterday</span>
        </div>
      </div>
      <div className="activity d-flex align-center txt-c-mobile">
        <img decoding="async" src={activityTwo} alt="" />
        <div className="info">
          <span className="d-block mb-10">VhS</span>
          <span className="c-grey">Got The B1 German Certificate</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">16:05</span>
          <span className="c-grey">Yesterday</span>
        </div>
      </div>
      <div className="activity d-flex align-center txt-c-mobile">
        <img decoding="async" src={activityThree} alt="" />
        <div className="info">
          <span className="d-block mb-10">Badges</span>
          <span className="c-grey">Unlocked The 10 Skills Badge</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">18:05</span>
          <span className="c-grey">Yesterday</span>
        </div>
      </div>
      <div className="activity d-flex align-center txt-c-mobile">
        <img decoding="async" src={activityOne} alt="" />
        <div className="info">
          <span className="d-block mb-10">Store</span>
          <span className="c-grey">Bought The Typescript Course</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">12:05</span>
          <span className="c-grey">Yesterday</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
