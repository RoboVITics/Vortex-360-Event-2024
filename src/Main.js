import Navbar from "./components/Landing-Page/Navbar";
import Domains from "./components/Landing-Page/Domains";
import Timeline1 from "./components/Landing-Page/Timeline";
import Sponsors from "./components/Landing-Page/Sponsors";
import Prizes from "./components/Landing-Page/Prizes";
import FAQs from "./components/Landing-Page/FAQs";
import Contact from "./components/Landing-Page/Contact";
import React from "react";
import LandingPage from "./components/Landing-Page/LandingPage";
import Mouse from "./components/Landing-Page/Mouse";
import Overlay from "./components/Landing-Page/Overlay";

const Main = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Domains />
      <Timeline1 />
      <Sponsors />
      <Prizes />
      <FAQs />
      
      <Contact />
      <Mouse />
      <Overlay />
    </div>
  );
};

export default Main;
