import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Domains from "./Domains";
import Timeline from "./Timeline";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import FAQs from "./FAQs";
import Contact from "./Contact";
import Timer from "./Timer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Domains />
      <Timeline />
      <Sponsors />
      <Prizes />
      <FAQs />
      <Contact />
      <Timer/>
    </div>
  );
}

export default App;
