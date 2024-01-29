import "./App.css";
import { useEffect, useState } from "react";
import Main from "./Main";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import DomainInfo from "./components/Landing-Page/DomainInfo";
import Profile from "./components/Profile/Profile";
import Progressbar from "./components/Landing-Page/Progressbar";
import Teams from "../src/components/Teams/Teams";
import Submissions from "./components/Submission-Page/Submission";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard";

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
    const hiddenPaths = ["/", "/login", "/register"];
    return !hiddenPaths.includes(location.pathname);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        {shouldShowSidebar() && <SideBar />}
        <div
          style={{ marginLeft: shouldShowSidebar() ? "-30px" : "0", flex: 1 }}
        ></div>
      </div>
          <Routes>
            <Route path="/" element={loading ? <Progressbar value={100 - a} /> : <Main />}/>
            <Route path="/domain/:domainId" element={<DomainInfo />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        
    </>
  );
}

export default App;
