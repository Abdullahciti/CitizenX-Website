<<<<<<< HEAD
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

const Courses = () => {
  return (
    <div className="courses">
      <div className="content w-full">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration:0.6 }}
        >
          <h1 className="p-relative">Courses</h1>
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
              desc={"Backend Tutorials to know what happens behind the scenes"}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
=======
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

const Courses = () => {
  return (
    <div className="courses">
      <div className="content w-full">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration:0.6 }}
        >
          <h1 className="p-relative">Courses</h1>
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
              desc={"Backend Tutorials to know what happens behind the scenes"}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
>>>>>>> 48aa0c7312dc6ee60dc9894d78e4d20dc9fc5138
