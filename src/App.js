import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import DomainInfo from "./components/Landing-Page/DomainInfo";

import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import NewProfile from "./components/Profile/newprofile";

import Teams from "../src/components/Teams/Teams";
import TeamRegistration from "../src/components/Teams/TeamRegistration";
import TeamProfile from "./components/Teams/TeamProfile";

import Submissions from "./components/Submission-Page/Submission";
import SubmittedForm from "./components/Submission-Page/Submittedform";


import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
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
        <div
          style={{
            marginLeft: shouldShowSidebar() ? "0px" : "0",
            width: "100%",
            flex: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<LandingPage/>}/>

            <Route path="/domain/:domainId" element={<DomainInfo />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/editprofile" element={<Profile />} />
            <Route path="/teamreg" element={<TeamRegistration />} />
            <Route path="/teamprofile" element={<TeamProfile />} />
            <Route path="/newprofile" element={<NewProfile />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/submittedForm" element={<SubmittedForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
