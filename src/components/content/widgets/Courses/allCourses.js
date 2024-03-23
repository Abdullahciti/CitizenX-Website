import CourseCard from "./CourseCard";

import {
  courseThree,
  courseFour,
  germanCourse,
  reactCourse,
  Avatar,
  VueCourse,
  galleryOne,
} from "../../../../assets/index.js";

const allCourses = [
  <CourseCard
    course={galleryOne}
    avatar={Avatar}
    title={"Html & Css"}
    desc={
      "Embark on a step-by-step journey to master HTML and CSS, laying the foundation for web development and keeping your skills up-to-date."
    }
    parts={21}
    cost={"free"}
  />,
  <CourseCard
    course={germanCourse}
    avatar={Avatar}
    title={"German B2 Course"}
    desc={
      "Ich kann mich jetzt ganz gut ausdrücken und mich gut mit den Menschen unterhalten."
    }
    parts={21}
    cost={400}
  />,
  <CourseCard
    course={reactCourse}
    avatar={Avatar}
    title={"React.js Course"}
    desc={
      "You can design components that represent different parts of your UI and compose them together to build complex interfaces."
    }
    parts={1150}
    cost={210}
  />,
  <CourseCard
    course={courseThree}
    avatar={Avatar}
    title={"Responsive Web Design"}
    desc={
      "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
    }
    parts={650}
    cost={90}
  />,
  <CourseCard
    course={courseFour}
    avatar={Avatar}
    title={"Mastering JavaScript"}
    desc={
      "Mastering JavaScript for creating reactive and dynamic web applications"
    }
    parts={950}
    cost={250}
  />,
  <CourseCard avatar={Avatar} parts={150} cost={"free"} />,
  <CourseCard
    course={VueCourse}
    avatar={Avatar}
    title={"Vue.js"}
    desc={
      "Mastering JavaScript`s framework like Vue.js will make me imporve/create reactive web applications"
    }
    parts={980}
    cost={500}
  />,
];
export default allCourses;
