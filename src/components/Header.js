import { Link } from "react-router-dom";
import { Avatar } from "../assets";

// Icons
import { FaSearch, FaBars } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { useState } from "react";

const Header = ({ handleMenu, handleSearchChange }) => {
  const [mode, setMode] = useState("light");
  const [modePick, setModePick] = useState(false);

  const handleLighticon = () => {
    setMode("light");
    setModePick(false);
  };
  const handleDarkicon = () => {
    setMode("dark");
    setModePick(false);
  };

  return (
    <div className="header bg-mainMode p-15 between-flex p-relative">
      <div className="menu-icon p-absolute" onClick={handleMenu}>
        <FaBars />
      </div>
      <div className="search p-relative">
        <FaSearch />
        <input
          className="p-10"
          type="search"
          placeholder="Type A Keyword"
          onChange={handleSearchChange}
        />
      </div>
      <div className="icons d-flex align-center">
        {mode !== "dark" ? (
          <LuSun onClick={(e) => setModePick((prev) => !prev)} />
        ) : (
          <BsMoonStars onClick={(e) => setModePick((prev) => !prev)} />
        )}
        <ul
          onBlur={() => {
            setModePick(false);
          }}
          className={modePick ? "mode-picker active" : "mode-picker"}
        >
          <li className="light" onClick={handleLighticon}>
            <LuSun /> <span>light</span>
          </li>
          <li className="dark" onClick={handleDarkicon}>
            <BsMoonStars />
            <span title="Please note that this feature is currently undergoing development.">
              dark
            </span>
          </li>
        </ul>
        <Link to="/profile">
          <img decoding="async" src={Avatar} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
