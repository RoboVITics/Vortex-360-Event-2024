import "./App.css";
import { useEffect, useState } from "react";
import Main from "./Main";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import DomainInfo from "./components/Landing-Page/DomainInfo";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import NewProfile from "./components/Profile/newprofile";
import Progressbar from "./components/Landing-Page/Progressbar";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Submissions from "./components/Submission-Page/Submission";
import Submitted from "./components/Submission-Page/Submittedform";
import TeamRegistration from "../src/components/Teams/TeamRegistration";
import TeamProfile from "./components/Teams/TeamProfile";
import Teams from "./components/Teams/Teams";


function App() {
  const [a, setA] = useState(100);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (a) {
      setTimeout(() => {
        setA(a - 1);
      }, 20);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [a]);
  const shouldShowSidebar = () => {
    const hiddenPaths = ["/", "/login", "/register", "/domain/:domainId"];
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
            <Route
              path="/"
              element={loading ? <Progressbar value={100 - a} /> : <Main />}
            />
            <Route path="/domain/:domainId" element={<DomainInfo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />}>

              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="newprofile" element={<NewProfile />} />
              <Route path="teams" element={<Teams />} />
              <Route path="teamreg" element={<TeamRegistration />} />
              <Route path="teamprofile" element={<TeamProfile />} />
              <Route path="submissions" element={<Submissions />} />
              <Route path="submittedform" element={<Submitted />} />

            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
