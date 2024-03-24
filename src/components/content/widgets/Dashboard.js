import React, { useEffect, useState } from "react";
// Motion to improve ux
import { motion } from "framer-motion";

// Function
import handlPath from "../../../functions/handlePath";

// Dashboard components
import Welcome from "./dashboard/Welcome";
import QuickDraft from "./dashboard/QuickDraft";
import YearlyTargets from "./dashboard/YearlyTargets";
import TicketsStatistics from "./dashboard/TicketsStatistics";
import LatestNews from "./dashboard/LatestNews";
import LatestTasks from "./dashboard/LatestTasks";
import TopSearchItems from "./dashboard/TopSearchItems";
import LatestUploads from "./dashboard/LatestUploads";
import LastProject from "./dashboard/LastProject";
import Reminders from "./dashboard/Reminders";
import LatestPosts from "./dashboard/LatestPosts";
import SocialMedia from "./dashboard/SocialMedia";
import ProjectsTable from "./dashboard/ProjectsTable";

// Data
import allData from "./dashboard/allData";

const Dashboard = ({ searchValue }) => {
  useEffect(() => {
    handlPath();
  }, []);

  const [tasks, setTasks] = useState(true);

  const handleTasks = () => {
    setTasks(false);
  };

  return (
    <div className="dashboard mt-20">
      <div className="content w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {searchValue ? (
            <div className="wrapper d-grid gap-20">
              {allData.map((component, index) => {
                if (
                  component.type.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase().replace(/\s/g, ""))
                ) {
                  return (
                    <React.Fragment key={index}>{component}</React.Fragment>
                  );
                }
                // Add a default return value here
                return null; // or <></> (empty fragment)
              })}
            </div>
          ) : (
            <div className="wrapper d-grid gap-20">
              {/* Start Welcome Widget > */}
              <Welcome />
              {/* End Welcome Widget >
           Start Targets Widget > */}
              <YearlyTargets />
              {/* End Targets Widget >
           Start Ticket Widget > */}
              <TicketsStatistics />
              {/* End Ticket Widget >
           Start Latest News Widget > */}
              <LatestNews />
              {/* End Latest News Widget >
           Start Tasks Widget > */}
              {tasks && <LatestTasks handleTasks={handleTasks} />}
              {/* End Tasks >
           Start Top Search Word Widget > */}
              <TopSearchItems />
              {/* End Top Search Word Widget >
           Start Latest Uploads Widget > */}
              <LatestUploads />
              {/* End Latest Uploads Widget >
           Start Last Project Progress Widget > */}
              <LastProject />
              {/* End Last Project Progress Widget > */}
              {/* Start Reminders Widget > */}
              <Reminders />
              {/* End Reminders Widget */}
              {/* Start Latest Post Widget  */}
              <LatestPosts />
              {/* End Latest Post Widget */}
              {/*Start Social Media Stats Widget */}
              <SocialMedia />
              {/*  End Media Stats Widget  */}
              {/* Start Projects Table > */}
              <ProjectsTable />
              {/*  End Projects Table > */}
              {/* Start Quick Draft Widget */}
              <QuickDraft />
              {/* End Quick Draft Widget */}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
