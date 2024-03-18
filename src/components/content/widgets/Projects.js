import { Link } from "react-router-dom";

import {
  avatarOne,
  avatarTwo,
  avatarFive,
  Avatar,
} from "../../../assets/index.js";

// Motion to improve ux
import { motion } from "framer-motion";

// Components
// import ProjectCard from "./Projects/ProjectCard.js";

const Projects = () => {
  return (
    <div className="projects">
      <div className="content w-full">
        <motion.div
          initial={{ x: -50, zIndex: 0 }}
          animate={{ x: 0, zIndex: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="p-relative">Projects</h1>
          <div className="projects-page d-grid m-20 gap-20">
            {/* <ProjectCard 
            teamOne={avatarOne}
            teamTwo={avatarTwo}
            teamThree={avatarThree}
            teamFour={avatarFour}
            teamFive={avatarFive}
            /> */}
            <div className="project bg-white p-20 rad-6 p-relative">
              <span className="date fs-13 c-grey">02/10/2023</span>
              <Link to="/">
                <h4 className="m-0">TopC Dashboard</h4>
              </Link>
              <p className="c-grey mt-10 mb-10 fs-14">
                CitizenX Website with dashboard using react
              </p>
              <div className="team">
                <a href="#1">
                  <img decoding="async" src={Avatar} alt="" />
                </a>
              </div>
              <div className="do d-flex">
                <span className="fs-13 rad-6 bg-eee">Programming</span>
                <span className="fs-13 rad-6 bg-eee">Design</span>
                <span className="fs-13 rad-6 bg-eee">Hosting</span>
                <span className="fs-13 rad-6 bg-eee">Marketing</span>
              </div>
              <div className="info between-flex">
                <div className="prog bg-eee">
                  <span className="bg-red w-50" data-width="150"></span>
                </div>
                <div className="fs-14 c-grey">
                  <i className="fa-solid fa-dollar-sign"></i>
                  250
                </div>
              </div>
            </div>
            <div className="project bg-white p-20 rad-6 p-relative">
              <span className="date fs-13 c-grey">12/3/2024</span>
              <a
                href="https://portfolio-drab-nine-29.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="m-0">Citizen Portofolio</h4>
              </a>
              <p className="c-grey mt-10 mb-10 fs-14">
                Citizen Portofolio Project for job application
              </p>
              <div className="team">
                <a href="#1">
                  <img decoding="async" src={Avatar} alt="" />
                </a>
              </div>
              <div className="do d-flex">
                <span className="fs-13 rad-6 bg-eee">Html</span>
                <span className="fs-13 rad-6 bg-eee">Css</span>
                <span className="fs-13 rad-6 bg-eee">JavaScript</span>
                <span className="fs-13 rad-6 bg-eee">JavaScript</span>
                <span className="fs-13 rad-6 bg-eee">React</span>
                <span className="fs-13 rad-6 bg-eee">React Icons</span>
                <span className="fs-13 rad-6 bg-eee">Git-Github</span>
              </div>
              <div className="info between-flex">
                <div className="prog bg-eee">
                  <span className="bg-green w-50" data-width="100"></span>
                </div>
                <div className="fs-14 c-grey">
                  <i className="fa-solid fa-dollar-sign"></i>
                  180
                </div>
              </div>
            </div>
            <div className="project bg-white p-20 rad-6 p-relative">
              <span className="date fs-13 c-grey">15/2/2024</span>
              <a
                href="https://estate-ii.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="m-0">Estate-II</h4>
              </a>
              <p className="c-grey mt-10 mb-10 fs-14">
                It`s a website for buying or renting an apartment
              </p>
              <div className="team">
                <a href="#1">
                  <img decoding="async" src={avatarOne} alt="" />
                  <img decoding="async" src={avatarTwo} alt="" />
                  <img decoding="async" src={Avatar} alt="" />
                  <img decoding="async" src={avatarFive} alt="" />
                </a>
              </div>
              <div className="do d-flex">
                <span className="fs-13 rad-6 bg-eee">Clients</span>
                <span className="fs-13 rad-6 bg-eee">React</span>
                <span className="fs-13 rad-6 bg-eee">Buying</span>
                <span className="fs-13 rad-6 bg-eee">Selling</span>
                <span className="fs-13 rad-6 bg-eee">Renting</span>
              </div>
              <div className="info between-flex">
                <div className="prog bg-eee">
                  <span className="bg-altColor w-75"></span>
                </div>
                <div className="fs-14 c-grey">
                  <i className="fa-solid fa-dollar-sign"></i>
                  75
                </div>
              </div>
            </div>
            <div className="project bg-white p-20 rad-6 p-relative">
              <span className="date fs-13 c-grey">15/7/2023</span>
              <a
                href="https://abdullahciti.github.io/bondi-with-Bootstrap"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="m-0">Bondi Website</h4>
              </a>
              <p className="c-grey mt-10 mb-10 fs-14">
                a normal website for Bondi Theme
              </p>
              <div className="team">
                <a href="#1">
                  <img decoding="async" src={Avatar} alt="" />
                  <img decoding="async" src={avatarFive} alt="" />
                </a>
              </div>
              <div className="do d-flex">
                <span className="fs-13 rad-6 bg-eee">Html</span>
                <span className="fs-13 rad-6 bg-eee">Css</span>
                <span className="fs-13 rad-6 bg-eee">Bootstrap</span>
                <span className="fs-13 rad-6 bg-eee">Vscode</span>
              </div>
              <div className="info between-flex">
                <div className="prog bg-eee">
                  <span className="bg-blue w-80"></span>
                </div>
                <div className="fs-14 c-grey">
                  {/* <i className="fa-solid fa-dollar-sign"></i> */}
                  Free
                </div>
              </div>
            </div>
            <div className="project bg-white p-20 rad-6 p-relative">
              <span className="date fs-13 c-grey">10/1/2024</span>
              <a
                href="https://weather-app-ochre-rho.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="m-0">Weather Now</h4>
              </a>
              <p className="c-grey mt-10 mb-10 fs-14">
                A simple application to know the weather 
              </p>
              <div className="team">
                <a href="#1">
                  <img decoding="async" src={Avatar} alt="" />
                  <img decoding="async" src={avatarTwo} alt="" />
                  <img decoding="async" src={avatarFive} alt="" />
                </a>
              </div>
              <div className="do d-flex">
                <span className="fs-13 rad-6 bg-eee">Html</span>
                <span className="fs-13 rad-6 bg-eee">Css</span>
                <span className="fs-13 rad-6 bg-eee">API</span>
                <span className="fs-13 rad-6 bg-eee">tailwind</span>
                <span className="fs-13 rad-6 bg-eee">Vue.js</span>
                <span className="fs-13 rad-6 bg-eee">Vue features</span>
              </div>
              <div className="info between-flex">
                <div className="prog bg-eee">
                  <span className="bg-mainColor w-full"></span>
                </div>
                <div className="fs-14 c-grey">
                  {/* <i className="fa-solid fa-dollar-sign"></i> */}
                  Free
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
