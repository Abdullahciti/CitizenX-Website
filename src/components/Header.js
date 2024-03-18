import { Link } from "react-router-dom";
import { Avatar } from "../assets";
import { PiBellRingingBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="head bg-white p-15 between-flex">
      <div className="search p-relative">
        <FaSearch />
        <input className="p-10" type="search" placeholder="Type A Keyword" />
      </div>
      <div className="icons d-flex align-center">
        <PiBellRingingBold />
        <Link to="/profile">
          <img decoding="async" src={Avatar} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;