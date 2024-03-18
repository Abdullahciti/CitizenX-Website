// Motion to improve ux
import { motion } from "framer-motion";
import { useEffect } from "react";
import handlPath from "../../../functions/handlePath";

// Dashboard components
import Welcome from "./dashboard/Welcome";
import QuickDraft from "./dashboard/QuickDraft";
import Targets from "./dashboard/Targets";
import Tickets from "./dashboard/Tickets";
import LatestNews from "./dashboard/LatestNews";
import Tasks from "./dashboard/Tasks";
import TopSeachWord from "./dashboard/TopSearchWord";
import LatestUploads from "./dashboard/LatestUploads";
import LastProject from "./dashboard/LastProject";
import Reminders from "./dashboard/Reminders";
import LatestPosts from "./dashboard/LatestPosts";
import SocialMedia from "./dashboard/SocialMedia";
import ProjectsTable from "./dashboard/ProjectsTable";

const Dashboard = () => {
  useEffect(() => {
    handlPath();
  }, []);

  return (
    <div className="dashboard">
      <div className="content w-full">
        <motion.div
          initial={{ x: -50, zIndex: 0 }}
          animate={{ x: 0, zIndex: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="wrapper d-grid gap-20">
            {/* <!-- Start Welcome Widget --> */}
            <Welcome />
            {/* <!-- End Welcome Widget -->
            <!-- Start Quick Draft Widget --> */}
            <QuickDraft />
            {/* <!-- End Quick Draft Widget -->
            <!-- Start Targets Widget --> */}
            <Targets />
            {/* <!-- End Targets Widget -->
            <!-- Start Ticket Widget --> */}
            <Tickets />
            {/* <!-- End Ticket Widget -->
            <!-- Start Latest News Widget --> */}
            <LatestNews />
            {/* <!-- End Latest News Widget -->
            <!-- Start Tasks Widget --> */}
            <Tasks />
            {/* <!-- End Tasks -->
            <!-- Start Top Search Word Widget --> */}
            <TopSeachWord />
            {/* <!-- End Top Search Word Widget -->
            <!-- Start Latest Uploads Widget --> */}
            <LatestUploads />
            {/* <!-- End Latest Uploads Widget -->
            <!-- Start Last Project Progress Widget --> */}
            <LastProject />
            {/* <!-- End Last Project Progress Widget --> */}
            {/* <!-- Start Reminders Widget --> */}
            <Reminders />
            {/* <!-- End Reminders Widget --> */}
            {/* <!-- Start Latest Post Widget --> */}
            <LatestPosts />
            {/* <!-- End Latest Post Widget -->
            <!-- Start Social Media Stats Widget --> */}
            <SocialMedia />
            {/* <!-- End Media Stats Widget --> */}
            {/* <!-- Start Projects Table --> */}
            <ProjectsTable />
            {/* <!-- End Projects Table --> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;