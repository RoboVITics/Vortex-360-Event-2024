import "./App.css";

import Navbar from "./Navbar";
import About from "./About";
import Domains from "./Domains";
import Timeline from "./Timeline";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import FAQs from "./FAQs";
import Contact from "./Contact";

import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import DomainInfo from "./DomainInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/domain/:domainId" element={<DomainInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
