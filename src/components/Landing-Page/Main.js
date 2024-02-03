import Navbar from "./Navbar";
import Domains from "./Domains";
import Timeline1 from "./Timeline";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import FAQs from "./FAQs";
import Contact from "./Contact";
import React from "react";
import Hero from "./Hero";
import Mouse from "./Mouse";
import Overlay from "./Overlay";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Domains />
      <Timeline1 />
      <Sponsors />
      <Prizes />
      <FAQs />
      <Contact />
      {/* <Mouse /> */}
      <Overlay />
    </div>
  );
};

export default Main;
