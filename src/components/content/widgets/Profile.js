// Motion to improve ux
import { motion } from "framer-motion";

// Profile Components
import Overview from "./profile/Overview";
import SkillsCard from "./profile/SkillsCard.js";
import Activity from "./profile/Activity";

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
           <Overview />
            {/* <!-- End Overview -->
          <!-- Start Other Data --> */}
            <div className="other-data d-flex">
              {/* Start Skills Card */}
              <SkillsCard />
              {/* End Skills Card */}
              {/* Start Activity */}
              <Activity />
              {/* End Activity */}
            </div>
            {/* <!-- End Other Data --> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
