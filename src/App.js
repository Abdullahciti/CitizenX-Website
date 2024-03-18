// Import Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Settings GLobal
import "./framework.css";
import "./index.css";
import "./all.min.css";
import "./normalize.css";

// Methods or Function as props
import handleActive from "./functions/handleActive";
import handlePath from "./functions/handlePath";

// Start Navbar
import Navbar from "./components/navbar menu/Navbar";
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

// Start App
function App() {
  useEffect(() => {
    handlePath();
  }, []);

  return (
    <BrowserRouter>
      <div className="App page d-flex">
        {/*  Start Navbar */}
        <div className="w-20">
          <Navbar handleActive={handleActive} />
        </div>
        {/*  End Navbar */}
        {/* <Dashboard /> */}
        <div className="w-80">
          {/* Start Header */}
          <Header />
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
