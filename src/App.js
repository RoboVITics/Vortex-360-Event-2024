import "./App.css";
import { useEffect, useState } from "react";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import DomainInfo from "./DomainInfo";
import Progressbar from "./Progressbar";

function App() {
  const [a, setA] = useState(100);
  const [loading, setLoading] = useState(true);
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
  console.log(a);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={loading ? <Progressbar value={100 - a} /> : <Main />}
        ></Route>
        <Route path="/domain/:domainId" element={<DomainInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
