<<<<<<< HEAD
// Motion to improve ux
import { motion } from "framer-motion";
import SocialInfos from "./settings/SocialInfos";
import SecurityInfos from "./settings/SecurityInfos";
import Backup from "./settings/Backup";
import Widgets from "./settings/Widgets";
import GeneralInfos from "./settings/GeneralInfos";

// Icons

const Settings = () => {
  return (
    <div className="settings">
      <div className="content w-full">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration:0.6 }}
        >
          <h1 className="p-relative">Settings</h1>
          <div className="settings-page m-20 d-grid gap-20">
            {/* <!-- Start Settings Box --> */}
            <div className="p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Site Control</h2>
              <p className="mt-0 mb-20 c-grey fs-15">
                Control The Website If There Is Maintenance
              </p>
              <div className="mb-15 between-flex">
                <div>
                  <span>Website Control</span>
                  <p className="c-grey mt-5 mb-0 fs-13">
                    Open/Close Website And Type The Reason
                  </p>
                </div>
                <div>
                  <label>
                    <input
                      className="toggle-checkbox"
                      type="checkbox"
                      defaultChecked
                    />
                    <div className="toggle-switch"> </div>
                  </label>
                </div>
              </div>
              <textarea
                className="close-message p-10 rad-6 d-block w-full"
                placeholder="Close Message Content"
              ></textarea>
            </div>
            {/* <!-- End Settings Box -->
          <!-- Start General Info Box --> */}
            <GeneralInfos />
            {/* <!-- End General Info Box -->
          <!-- Start Security Box --> */}
            <SecurityInfos />
            {/* <!-- End Security Box -->
          <!-- Start Social Box --> */}
            <SocialInfos />
            {/* <!-- End Social Box -->
          <!-- Start widgets Box --> */}
            <Widgets />
            {/* <!-- End widgets Box -->
          <!-- Start Backup Box --> */}
            <Backup />
            {/* <!-- End Backup Box --> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
=======
// Motion to improve ux
import { motion } from "framer-motion";
import SocialInfos from "./settings/SocialInfos";
import SecurityInfos from "./settings/SecurityInfos";
import Backup from "./settings/Backup";
import Widgets from "./settings/Widgets";
import GeneralInfos from "./settings/GeneralInfos";

// Icons

const Settings = () => {
  return (
    <div className="settings">
      <div className="content w-full">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration:0.6 }}
        >
          <h1 className="p-relative">Settings</h1>
          <div className="settings-page m-20 d-grid gap-20">
            {/* <!-- Start Settings Box --> */}
            <div className="p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Site Control</h2>
              <p className="mt-0 mb-20 c-grey fs-15">
                Control The Website If There Is Maintenance
              </p>
              <div className="mb-15 between-flex">
                <div>
                  <span>Website Control</span>
                  <p className="c-grey mt-5 mb-0 fs-13">
                    Open/Close Website And Type The Reason
                  </p>
                </div>
                <div>
                  <label>
                    <input
                      className="toggle-checkbox"
                      type="checkbox"
                      defaultChecked
                    />
                    <div className="toggle-switch"> </div>
                  </label>
                </div>
              </div>
              <textarea
                className="close-message p-10 rad-6 d-block w-full"
                placeholder="Close Message Content"
              ></textarea>
            </div>
            {/* <!-- End Settings Box -->
          <!-- Start General Info Box --> */}
            <GeneralInfos />
            {/* <!-- End General Info Box -->
          <!-- Start Security Box --> */}
            <SecurityInfos />
            {/* <!-- End Security Box -->
          <!-- Start Social Box --> */}
            <SocialInfos />
            {/* <!-- End Social Box -->
          <!-- Start widgets Box --> */}
            <Widgets />
            {/* <!-- End widgets Box -->
          <!-- Start Backup Box --> */}
            <Backup />
            {/* <!-- End Backup Box --> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
>>>>>>> 48aa0c7312dc6ee60dc9894d78e4d20dc9fc5138
