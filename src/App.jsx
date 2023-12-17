import React from "react";
import "./App.css";
import { navConfig } from "./config";
import Navigation from "./components/navigation";
import { Routes, Route, NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Home from "./pages/home";
import Intro from "./pages/intro";
import Whatis from "./pages/whatis";
import PageLayout from "./layouts/pageLayout";

export const AppContext = React.createContext();

function App() {
  return (
    <>
      <AppContext.Provider value={navConfig}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/whatis" element={<Whatis />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
