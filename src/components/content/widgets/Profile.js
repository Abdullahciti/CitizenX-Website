// Motion to improve ux
import { motion } from "framer-motion";

import {
  Avatar,
  activityOne,
  activityTwo,
  activityThree,
} from "../../../assets/index.js";

// import from react
import { useEffect } from "react";

// Function
import handlPath from "../../../functions/handlePath.js";

const Profile = () => {
  useEffect(() => {
    handlPath();
  }, []);

  return (
    <div className="profile">
      <div className="content w-full">
        <motion.div
          initial={{ x: -50, zIndex: 0 }}
          animate={{ x: 0, zIndex: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="p-relative">Profile</h1>
          <div className="profile-page m-20">
            {/* <!-- Start Overview --> */}
            <div className="overview bg-white rad-10 d-flex align-center">
              <div className="avatar-box txt-c p-20">
                <img
                  decoding="async"
                  className="rad-half mb-10"
                  src={Avatar}
                  alt=""
                />
                <h3 className="m-0">Abdullah Arafa</h3>
                <a href="https://abdullahciti.github.io/Lebenslauf/" target="_blank" rel="noreferrer">
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
              </div>
              <div className="info-box w-full txt-c-mobile">
                {/* <!-- Start Information Row --> */}
                <div className="box p-20 d-flex align-center">
                  <h4 className="c-grey fs-15 m-0 w-full">
                    General Information
                  </h4>
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
                  <h4 className="c-grey w-full fs-15 m-0">
                    Personal Information
                  </h4>
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
                  <h4 className="c-grey w-full fs-15 m-0">
                    Billing Information
                  </h4>
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
                      <input
                        className="toggle-checkbox"
                        type="checkbox"
                      />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
                {/* <!-- End Information Row --> */}
              </div>
            </div>
            {/* <!-- End Overview -->
          <!-- Start Other Data --> */}
            <div className="other-data d-flex gap-20">
              <div className="skills-card p-20 bg-white rad-10 mt-20">
                <h2 className="mt-0 mb-10">My Skills</h2>
                <p className="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
                <ul className="m-0 txt-c-mobile">
                  <li>
                    <span>HTML</span>
                    <span>NodeJs</span>
                    <span>PhP</span>
                  </li>
                  <li>
                    <span>Css</span>
                    <span>Sass</span>
                    <span>Tailwind</span>
                    <span>Bootstrap</span>
                  </li>
                  <li>
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>Vuejs</span>
                    <span>Reactjs</span>
                  </li>
                  <li>
                    <span>Unit Testing</span>
                    <span>Problem Solving</span>
                    <span>Git-Github</span>
                  </li>
                  <li>
                    <span>Multi-lingual</span>
                    <span>Soft-skills</span>
                    <span>communication</span>
                  </li>
                </ul>
              </div>
              <div className="activities p-20 bg-white rad-10 mt-20">
                <h2 className="mt-0 mb-10">Latest Activities</h2>
                <p className="mt-0 mb-20 c-grey fs-15">
                  Latest Activities Done By The User
                </p>
                <div className="activity d-flex align-center txt-c-mobile">
                  <img decoding="async" src={activityOne} alt="" />
                  <div className="info">
                    <span className="d-block mb-10">Store</span>
                    <span className="c-grey">
                      Bought The Mastering Python Course
                    </span>
                  </div>
                  <div className="date">
                    <span className="d-block mb-10">18:10</span>
                    <span className="c-grey">Yesterday</span>
                  </div>
                </div>
                <div className="activity d-flex align-center txt-c-mobile">
                  <img decoding="async" src={activityTwo} alt="" />
                  <div className="info">
                    <span className="d-block mb-10">Academy</span>
                    <span className="c-grey">Got The B1 Certificate</span>
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
            </div>
            {/* <!-- End Other Data --> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
