// Motion to improve ux
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="plans">
      {" "}
      <div className="content w-full">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration:0.6 }}
        >
          <h1 className="p-relative">Plans</h1>
          <div className="plans-page d-grid m-20 gap-20">
            <div className="plan green bg-mainMode p-20">
              <div className="top bg-green txt-c p-20">
                <h2 className="m-0 c-white">Free</h2>
                <div className="price c-white">
                  <span>$</span>0.00
                </div>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Text Lessons</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Videos Lessons</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Appear On Leaderboard</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>Browse Content Without Ads</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>Access All Assignments</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>Get Daily Prizes</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>Earn Certificate</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>1 GB Space For Hosting Files</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>Access Badge System</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
              </ul>
              <div className="join center-flex">
                <Link
                  to="/plans/free-plan"
                  className="btn-shape bg-green c-white d-block w-fit"
                >
                  Join
                </Link>
              </div>
            </div>
            {/* <!-- Start Plan --> */}
            <div className="plan blue bg-white p-20">
              <div className="top bg-mainColor txt-c p-20">
                <h2 className="m-0 c-white">Basic</h2>
                <div className="price c-white">
                  <span>$</span>7.99
                </div>
              </div>
              <ul className="list-none p-0">
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Text Lessons</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Videos Lessons</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Appear On Leaderboard</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Browse Content Without Ads</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Assignments</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Get Daily Prizes</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Earn Certificate</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>1 GB Space For Hosting Files</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                  <span>Access Badge System</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
              </ul>
              <div className="join center-flex">
                <Link
                  to="/plans/basic-plan"
                  className="btn-shape bg-mainColor c-white d-block w-fit"
                >
                  Join
                </Link>
              </div>
            </div>
            {/* <!-- End Plan -->
          <!-- Start Plan --> */}
            <div className="plan orange bg-white p-20">
              <div className="top bg-orange txt-c p-20">
                <h2 className="m-0 c-white">Premium</h2>
                <div className="price c-white">
                  <span>$</span>19.99
                </div>
              </div>
              <ul className="list-none p-0">
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Text Lessons</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Videos Lessons</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Appear On Leaderboard</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Browse Content Without Ads</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access All Assignments</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Get Daily Prizes</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Earn Certificate</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>1 GB Space For Hosting Files</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
                <li>
                  <i className="fa-solid fa-check fa-fw yes"></i>
                  <span>Access Badge System</span>
                  <i className="fa-solid fa-circle-info help"></i>
                </li>
              </ul>
              <p className="c-grey m-0 txt-c">This Is Your Current Plan</p>
            </div>
            {/* <!-- End Plan --> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Plans;
