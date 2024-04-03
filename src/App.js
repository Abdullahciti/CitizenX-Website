// Import Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Settings GLobal
import "./framework.css";
import "./index.css";
import "./all.min.css";
import "./normalize.css";

// Methods or Function as props
import handleActive from "./functions/handleActive";
import handlePath from "./functions/handlePath";

// Start Navbar
import Navbar from "./components/navbarmenu/Navbar";
// Start Navbar Links
import Dashboard from "./components/content/widgets/Dashboard";
import Projects from "./components/content/widgets/Projects";
import Profile from "./components/content/widgets/Profile";
import Settings from "./components/content/widgets/Settings";
import Courses from "./components/content/widgets/Courses";
import Friends from "./components/content/widgets/Friends";
import Files from "./components/content/widgets/FIles";
import Plans from "./components/content/widgets/Plans";

// Components
import Header from "./components/Header";
import NavbarMobile from "./components/navbarmenu/NavbarMobile";
import DearUser from "./components/DearUser";

// Motion
// import { motion } from "framer-motion";

// Start App
function App() {
  useEffect(() => {
    handlePath();
  }, []);

  const [menu, setMenu] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <div className="App page d-flex">
        {/*  Start Navbar */}
        <div className="main-menu">
          <Navbar handleActive={handleActive} />
        </div>
        {/*  End Navbar */}
        {/* <Dashboard /> */}
        <div className="main">
          <div className="mob-menu">
            <NavbarMobile
              menu={menu}
              closeMenu={() => setMenu(false)}
            />
          </div>

          {/* Start Header */}
          <Header
            menu={menu}
            openMenu={() => setMenu(true)}
            handleSearchChange={(e) =>
              setSearchValue((searchValue) => e.target.value)
            }
          />
          {/* End Header */}
          <Routes>
            <Route path="/" element={<Dashboard searchValue={searchValue} />} />
            <Route
              path="/dashboard"
              element={<Dashboard searchValue={searchValue} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/projects"
              element={<Projects searchValue={searchValue} />}
            />
            <Route
              path="/courses"
              element={<Courses searchValue={searchValue} />}
            />
            <Route
              path="/friends"
              element={<Friends searchValue={searchValue} />}
            />
            <Route
              path="/files"
              element={<Files searchValue={searchValue} />}
            />
            <Route path="/plans" element={<Plans />} />
            <Route path="*" element={<DearUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
