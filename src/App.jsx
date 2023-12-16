import React from "react";
import "./App.css";
import { navConfig } from "./config";
import Navigation from "./components/navigation";
import { Routes, Route, NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const AppContext = React.createContext();

function App() {
  return (
    <>
      <AppContext.Provider value={navConfig}>
        <Routes></Routes>
        {/* <div className="App">{navConfig.pages[0].title}</div> */}
        <Navigation />
        <ReactMarkdown>this is a **cool** document</ReactMarkdown>
      </AppContext.Provider>
    </>
  );
}

export default App;
