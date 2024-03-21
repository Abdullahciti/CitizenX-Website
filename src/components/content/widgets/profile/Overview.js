import { Avatar } from "../../../../assets";
import { SiGithub } from "react-icons/si";

const Overview = () => {
  return (
    <div className="overview bg-white rad-10 d-flex align-center">
      <div className="avatar-box txt-c p-20 m-20">
        <img decoding="async" className="rad-half mb-10" src={Avatar} alt="" />
        <h3 className="m-0">Abdullah Arafa</h3>
        <a
          href="https://abdullahciti.github.io/Lebenslauf/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="c-grey mt-10 mx-auto">CV</p>
        </a>
        <div className="level rad-6 bg-eee p-relative">
          <span style={{ width: "70%" }}></span>
        </div>
        <div className="rating mt-10 mb-10">
          <i className="fa-solid fa-star c-orange fs-13"></i>
          <i className="fa-solid fa-star c-orange fs-13"></i>
          <i className="fa-solid fa-star c-orange fs-13"></i>
          <i className="fa-solid fa-star c-orange fs-13"></i>
          <i className="fa-solid fa-star c-orange fs-13"></i>
        </div>
        <p className="c-grey m-0 fs-13">Full-Time</p>
        <span className="github-link">
          <a
            href="https://github.com/Abdullahciti?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <SiGithub />
          </a>
        </span>
      </div>
      <div className="info-box w-full txt-c-mobile">
        {/* <!-- Start Information Row --> */}
        <div className="box mx-auto p-20 d-flex align-center">
          <h4 className="c-grey fs-15 m-0 w-full">General Information</h4>
          <div className="fs-14">
            <span className="c-grey">Full Name</span>
            <span> Abdullah Arafa</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Gender:</span>
            <span> Male</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Country:</span>
            <span> Egypt</span>
          </div>
          <div className="fs-14">
            <label>
              <input
                className="toggle-checkbox"
                type="checkbox"
                defaultChecked
              />
              <div className="toggle-switch"></div>
            </label>
          </div>
        </div>
        {/* <!-- End Information Row -->
        <!-- Start Information Row --> */}
        <div className="box p-20 d-flex align-center">
          <h4 className="c-grey w-full fs-15 m-0">Personal Information</h4>
          <div className="fs-14">
            <span className="c-grey">Email:</span>
            <span> abdullahciti@gmx.de</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Phone:</span>
            <span> 01635345412</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Date Of Birth:</span>
            <span> 01.08.1998</span>
          </div>
          <div className="fs-14">
            <label>
              <input
                className="toggle-checkbox"
                type="checkbox"
                defaultChecked
              ></input>
              <div className="toggle-switch"></div>
            </label>
          </div>
        </div>
        {/* <!-- End Information Row -->
        <!-- Start Information Row --> */}
        <div className="box p-20 d-flex align-center">
          <h4 className="c-grey w-full fs-15 m-0">Job Information</h4>
          <div className="fs-14">
            <span className="c-grey">Title:</span>
            <span> Front-end Developer</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Programming Language:</span>
            <span> JavaScript</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Years Of Experience:</span>
            <span> 2</span>
          </div>
          <div className="fs-14">
            <label>
              <input
                className="toggle-checkbox"
                type="checkbox"
                defaultChecked
              />
              <div className="toggle-switch"></div>
            </label>
          </div>
        </div>
        {/* <!-- End Information Row -->
        <!-- Start Information Row --> */}
        <div className="box p-20 d-flex align-center">
          <h4 className="c-grey w-full fs-15 m-0">Billing Information</h4>
          <div className="fs-14">
            <span className="c-grey">Payment Method:</span>
            <span> Paypal</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Email:</span>
            <span> abdullahciti@gmx.de</span>
          </div>
          <div className="fs-14">
            <span className="c-grey">Subscription:</span>
            <span> Monthly</span>
          </div>
          <div className="fs-14">
            <label>
              <input className="toggle-checkbox" type="checkbox" />
              <div className="toggle-switch"></div>
            </label>
          </div>
        </div>
        {/* <!-- End Information Row --> */}
      </div>
    </div>
  );
};

export default Overview;
