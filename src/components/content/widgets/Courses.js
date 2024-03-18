import {
  avatarFive,
  avatarOne,
  avatarThree,
  courseOne,
  courseTwo,
  courseThree,
  courseFour,
  courseFive,
  avatarFour,
  avatarTwo,
  avatarSix,
} from "../../../assets/index.js";

// Motion
import { motion } from "framer-motion";
import CourseCard from "./Courses/CourseCard.js";

const Courses = () => {
  return (
    <div className="courses">
      <div className="content w-full">
        <motion.div
          initial={{ x: -50, zIndex: 0 }}
          animate={{ x: 0, zIndex: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="p-relative">Courses</h1>
          <div className="courses-page d-grid m-20 gap-20">
            {/* Start Mastering web desgin */}
            <CourseCard
              course={courseOne}
              avatar={avatarOne}
              title={"Mastering Web Design"}
              desc={
                "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
              }
              parts={980}
              cost={500}
            />
            {/* End Mastering web desgin */}
            {/* Start Data Structure And Algorithms */}
            <CourseCard
              course={courseTwo}
              avatar={avatarSix}
              title={"Data Structure And Algorithms"}
              desc={
                "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering"
              }
              parts={1150}
              cost={210}
            />
            {/* End Data Structure And Algorithms */}
            {/* Start Mastering web desgin */}
            <CourseCard
              course={courseThree}
              avatar={avatarThree}
              title={"Responsive Web Design"}
              desc={
                "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
              }
              parts={650}
              cost={90}
            />
            {/* End Mastering web desgin */}
            {/* Start Mastering Python */}
            <CourseCard
              course={courseFour}
              avatar={avatarFive}
              title={"Mastering Python"}
              desc={
                "Mastering Python to prepare for data science and AI and autimatin in my life"
              }
              parts={950}
              cost={250}
            />
            {/* End Mastering Python */}
            {/* Start Backend Basics */}
            <CourseCard
              course={courseFive}
              avatar={avatarFour}
              title={"Backend Basics"}
              desc={"Backend Tutorials to know what happens behind the scenes"}
              parts={150}
              cost={"free"}
            />
            {/* End Backend Basics */}
            {/* Start Mastering web desgin */}
            <CourseCard
              course={courseOne}
              avatar={avatarOne}
              title={"Mastering Web Design"}
              desc={
                "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
              }
              parts={980}
              cost={500}
            />
            {/* End Mastering web desgin */}
            {/* Start Data Structure And Algorithms */}
            <CourseCard
              course={courseTwo}
              avatar={avatarSix}
              title={"Data Structure And Algorithms"}
              desc={
                "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering"
              }
              parts={1150}
              cost={210}
            />
            {/* End Data Structure And Algorithms */}
            {/* Start Mastering web desgin */}
            <CourseCard
              course={courseThree}
              avatar={avatarThree}
              title={"Responsive Web Design"}
              desc={
                "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
              }
              parts={650}
              cost={90}
            />
            {/* End Mastering web desgin */}
            {/* Start Mastering Python */}
            <CourseCard
              course={courseFour}
              avatar={avatarFive}
              title={"Mastering Python"}
              desc={
                "Mastering Python to prepare for data science and AI and autimatin in my life"
              }
              parts={950}
              cost={250}
            />
            {/* End Mastering Python */}
            {/* Start Backend Basics */}
            <CourseCard
              course={courseFive}
              avatar={avatarFour}
              title={"Backend Basics"}
              desc={"Backend Tutorials to know what happens behind the scenes"}
              parts={150}
              cost={"free"}
            />
            {/* End Backend Basics */}
            {/* Start Mastering web desgin */}
            <CourseCard
              course={courseOne}
              avatar={avatarOne}
              title={"Mastering Web Design"}
              desc={
                "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
              }
              parts={980}
              cost={500}
            />
            {/* End Mastering web desgin */}
            {/* Start Data Structure And Algorithms */}
            <CourseCard
              course={courseTwo}
              avatar={avatarTwo}
              title={"Data Structure And Algorithms"}
              desc={
                "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering"
              }
              parts={1150}
              cost={210}
            />
            {/* End Data Structure And Algorithms */}
            {/* Start Mastering web desgin */}
            <CourseCard
              course={courseThree}
              avatar={avatarThree}
              title={"Responsive Web Design"}
              desc={
                "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
              }
              parts={650}
              cost={90}
            />
            {/* End Mastering web desgin */}
            {/* Start Mastering Python */}
            <CourseCard
              course={courseFour}
              avatar={avatarFive}
              title={"Mastering Python"}
              desc={
                "Mastering Python to prepare for data science and AI and autimatin in my life"
              }
              parts={950}
              cost={250}
            />
            {/* End Mastering Python */}
            {/* Start Backend Basics */}
            <CourseCard
              course={courseFive}
              avatar={avatarFour}
              title={"Backend Basics"}
              desc={"Backend Tutorials to know what happens behind the scenes"}
              parts={150}
              cost={"free"}
            />
            {/* End Backend Basics */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
