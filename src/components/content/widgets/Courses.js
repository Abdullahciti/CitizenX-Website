import {
  courseThree,
  courseFour,
  germanCourse,
  reactCourse,
  Avatar,
  backendCourse,
  VueCourse,
  galleryOne,
} from "../../../assets/index.js";

// Motion
import { motion } from "framer-motion";
import CourseCard from "./Courses/CourseCard.js";

// Data
import allCourses from "./Courses/allCourses.js";
import React from "react";

const Courses = ({ searchValue }) => {
  return (
    <div className="courses">
      <div className="content w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="p-relative">Courses</h1>
          {searchValue ? (
            <div className="courses-page d-grid m-20 gap-20">
              {allCourses.map((course, index) => {
                const title = course.props.title || ""; // Ensure title is not undefined
                if (typeof title !== "string") return null; // Ensure title is a string
                if (title.toLowerCase().includes(searchValue.toLowerCase())) {
                  return (
                    <React.Fragment key={index}>
                      <CourseCard
                        course={course.props.course}
                        avatar={course.props.avatar}
                        title={title} // Use the processed title
                        desc={course.props.desc}
                        parts={course.props.parts}
                        cost={course.props.cost}
                      />
                    </React.Fragment>
                  );
                } else {
                  return null; // Don't render anything if the title doesn't match
                }
              })}
            </div>
          ) : (
            <div className="courses-page d-grid m-20 gap-20">
              {/* Start German Course */}
              <CourseCard
                course={galleryOne}
                avatar={Avatar}
                title={"Html & Css"}
                desc={
                  "Embark on a step-by-step journey to master HTML and CSS, laying the foundation for web development and keeping your skills up-to-date."
                }
                parts={21}
                cost={"free"}
              />
              {/* End German Course */}
              {/* Start German Course */}
              <CourseCard
                course={germanCourse}
                avatar={Avatar}
                title={"German B2 Course"}
                desc={
                  "Ich kann mich jetzt ganz gut ausdrücken und mich gut mit den Menschen unterhalten."
                }
                parts={21}
                cost={400}
              />
              {/* End German Course */}
              {/* StartReact.js */}
              <CourseCard
                course={reactCourse}
                avatar={Avatar}
                title={"React.js Course"}
                desc={
                  "You can design components that represent different parts of your UI and compose them together to build complex interfaces."
                }
                parts={1150}
                cost={210}
              />
              {/* End React.js */}
              {/* Start Mastering web desgin */}
              <CourseCard
                course={courseThree}
                avatar={Avatar}
                title={"Responsive Web Design"}
                desc={
                  "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
                }
                parts={650}
                cost={90}
              />
              {/* End Mastering web desgin */}
              {/* Start Mastering JavaScript */}
              <CourseCard
                course={courseFour}
                avatar={Avatar}
                title={"Mastering JavaScript"}
                desc={
                  "Mastering JavaScript for creating reactive and dynamic web applications"
                }
                parts={950}
                cost={250}
              />
              {/* End Mastering JavaScript */}
              {/* Start Backend Basics */}
              <CourseCard
                course={backendCourse}
                avatar={Avatar}
                title={"Backend Basics"}
                desc={
                  "Backend Tutorials to know what happens behind the scenes"
                }
                parts={150}
                cost={"free"}
              />
              {/* End Backend Basics */}
              {/* Start Vue.js */}
              <CourseCard
                course={VueCourse}
                avatar={Avatar}
                title={"Vue.js"}
                desc={
                  "Mastering JavaScript`s framework like Vue.js will make me imporve/create reactive web applications"
                }
                parts={980}
                cost={500}
              />
              {/* End Vue.js */}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
