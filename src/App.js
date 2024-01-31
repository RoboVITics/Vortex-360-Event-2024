import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import DomainInfo from "./components/Landing-Page/DomainInfo";
import CreateProfile from "./components/Profile/CProfile";
import Profile from "./components/Profile/Profile";
import TeamRegistration from "../src/components/Teams/TeamRegistration";
import Submissions from "./components/Submission-Page/Submission";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Submitted from "./components/Submission-Page/Submittedform"
import TeamProfile from "./components/Teams/TeamProfile";
import Teams from "./components/Teams/Teams";
import LandingPage from "./components/Landing-Page/LandingPage";



function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const shouldShowSidebar = () => {
    const hiddenPaths = ["/", "/login", "/register"];
    return !hiddenPaths.includes(location.pathname);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        {shouldShowSidebar() && <SideBar />}
        <div>
          <Routes>
            <Route
              path="/" element={<LandingPage/>}
            />
            <Route path="/domain/:domainId" element={<DomainInfo />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<CreateProfile />} />
            <Route path="/editprofile" element={<Profile />} />
            <Route path="/teamreg" element={<TeamRegistration />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/submittedform" element={<Submitted />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teamprofile" element={<TeamProfile/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
