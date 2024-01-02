import "./App.css";
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
