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

  const imageSources = ['../img1.jpg', '../img2.jpg', 'img3.jpg'];
  const backendDateTimes = [
    '2023-12-31T21:06:00',
    '2024-12-16T18:00:00',
    '2024-01-20T20:00:00'
  ]; // Example date and time strings
  return (
    <div className="App">
      <Navbar />
      <About />
      <Domains />
      <Timeline imgSources={imageSources} dateTimes={backendDateTimes} />
      <Sponsors />
      <Prizes />
      <FAQs />
      <Contact />
      <Timer/>
    </div>
  );
}

export default App;
