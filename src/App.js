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

// Motion
// import { motion } from "framer-motion";

// Start App
function App() {
  useEffect(() => {
    handlePath();
  }, []);

  const [menu, setMenu] = useState(false);

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
          {/* <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
             > */}
          <div className="mob-menu" onClick={() => {setMenu(false)}}>
            <NavbarMobile
              menu={menu}
              handleMenu={() => setMenu((prev) => !prev)}
            />
          </div>
          {/* </motion.div> */}

          {/* Start Header */}
          <Header menu={menu} handleMenu={() => setMenu((prev) => !prev)} />
          {/* End Header */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/files" element={<Files />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
