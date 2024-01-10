import Navbar from "./Navbar";
import About from "./About";
import Domains from "./Domains";
import Timeline from "./Timeline";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import FAQs from "./FAQs";
import Contact from "./Contact";
import React from "react";

const Main = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Domains />
      <Timeline />
      <Sponsors />
      <Prizes />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Main;
