import { Link } from "react-router-dom";
import { Avatar } from "../assets";

// Icons
import { PiBellRingingBold } from "react-icons/pi";
import { FaSearch, FaBars } from "react-icons/fa";
const Header = ({ menu, handleMenu, handleSearchChange }) => {


  

  return (
    <div className="head bg-white p-15 between-flex p-relative">
        <div className="menu-icon p-absolute" onClick={handleMenu}>
          <FaBars />
        </div>
      <div className="search p-relative">
        <FaSearch />
        <input className="p-10" type="search" placeholder="Type A Keyword" onChange={handleSearchChange} />
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
