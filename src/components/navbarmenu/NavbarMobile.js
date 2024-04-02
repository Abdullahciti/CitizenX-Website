import { Link } from "react-router-dom";

// Icons
import { MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { FaProjectDiagram } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { LuFileSearch } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import handleActive from "../../functions/handleActive";

const NavbarMobile = ({ menu, handleMenu }) => {
  return (
    // {/* <PiBellRingingBold /> */}
    <div
      className={menu ? "navbar active bg-mainMode p-20" : "navbar bg-mainMode p-20"}
    >
      <div className="menu-icon p-absolute" onClick={handleMenu}>
        X
      </div>
      <Link className="link" to="/">
        <h3 className="p-relative txt-c mt-0">CitizenX Gallery</h3>
      </Link>
      <ul>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/dashboard"
          >
            <i>
              <MdDashboard />
            </i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/settings"
          >
            <i>
              <IoIosSettings />
            </i>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/profile"
          >
            <i>
              <ImProfile />
            </i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/projects"
          >
            <i>
              <FaProjectDiagram />
            </i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/courses"
          >
            <i>
              <SiCoursera />
            </i>
            <span>Courses</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/friends"
          >
            <i>
              <FaUserFriends />
            </i>
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/files"
          >
            <i>
              <LuFileSearch />
            </i>
            <span>Files</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleActive(e, "ul li a")}
            className="d-flex align-center fs-14 c-black rad-6 p-10"
            to="/plans"
          >
            <i>
              <MdOutlinePayments />
            </i>
            <span>Plans</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
