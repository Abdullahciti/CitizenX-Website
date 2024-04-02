import { Link } from "react-router-dom";
import { Avatar } from "../assets";

// Icons
import { FaSearch, FaBars } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { useState } from "react";

const Header = ({ handleMenu, handleSearchChange }) => {
  // const [dark, setDark] = useState(false);
  const [mode, setMode] = useState("light");
  const [modePick, setModePick] = useState(false);
  const root = document.documentElement;

  const handleLighticon = () => {
    // light mode
    root.style.setProperty("--main-modeColor", "#fff"); // white color for backgrounds
    root.style.setProperty("--main-color", "#5c6bc0");
    root.style.setProperty("--alt-color", "#9575cd");
    root.style.setProperty("--orange-color", "#ffcc80");
    root.style.setProperty("--green-color", "#4db6ac");
    root.style.setProperty(" --red-color", "#f44336");
    root.style.setProperty("--grey-color", "#9e9e9e");
    // root.style.setProperty("--text-color", "#000");
    setMode("light");
    setModePick(false);
  };
  const handleDarkicon = () => {
    // Dark mode
    root.style.setProperty("--main-modeColor", "#000"); // black color for backgrounds
    root.style.setProperty("--main-color", "#263238"); // Dark blue-grey
    root.style.setProperty("--alt-color", "#263299"); // Dark orange
    // root.style.setProperty("--orange-color", "#651fff"); // Deep purple
    root.style.setProperty("--green-color", "#00c853"); // Dark green
    root.style.setProperty("--red-color", "#d50000"); // Dark red
    root.style.setProperty("--grey-color", "#bdbdbd"); // Light grey
    // root.style.setProperty("--text-color", "#fff");
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
        <ul className={modePick ? "mode-picker active" : "mode-picker"}>
          <li className="light" onClick={handleLighticon}>
            <LuSun /> <span>light</span>
          </li>
          <li className="dark" onClick={handleDarkicon}>
            <BsMoonStars />
            <span>dark</span>
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
