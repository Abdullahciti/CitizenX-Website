<<<<<<< HEAD
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration:0.6 }}
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
=======
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration:0.6 }}
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
>>>>>>> 48aa0c7312dc6ee60dc9894d78e4d20dc9fc5138
