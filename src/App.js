import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import DomainInfo from "./components/Landing-Page/DomainInfo";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
<<<<<<< HEAD
import NewProfile from "./components/Profile/newprofile";
import Progressbar from "./components/Landing-Page/Progressbar";
=======
import TeamRegistration from "../src/components/Teams/TeamRegistration";
import Submissions from "./components/Submission-Page/Submission";
>>>>>>> 9480d798e425d5191556d07a29d6214b6b6da2f3
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Submissions from "./components/Submission-Page/Submission";
import Submitted from "./components/Submission-Page/Submittedform";
import TeamRegistration from "../src/components/Teams/TeamRegistration";
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
<<<<<<< HEAD
        <div
          style={{
            marginLeft: shouldShowSidebar() ? "0px" : "0",
            width: "100%",
            flex: 1,
          }}
        >
=======
        <div>
>>>>>>> 9480d798e425d5191556d07a29d6214b6b6da2f3
          <Routes>
            <Route
              path="/" element={<LandingPage/>}
            />
            <Route path="/domain/:domainId" element={<DomainInfo />} />
            <Route path="/teams" element={<Teams />} />
<<<<<<< HEAD
            <Route path="/profile" element={<Profile />} />
            <Route path="/teamreg" element={<TeamRegistration />} />
            <Route path="/newprofile" element={<NewProfile />} />
=======
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<CreateProfile />} />
            <Route path="/editprofile" element={<Profile />} />
            <Route path="/teamreg" element={<TeamRegistration />} />
>>>>>>> 9480d798e425d5191556d07a29d6214b6b6da2f3
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/submittedform" element={<Submitted />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teamprofile" element={<TeamProfile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
