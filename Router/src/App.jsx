import "./App.css";
import { About } from "./Container/About";
import React from "react";
import Profile from "./Container/Profile";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [state, setState] = useState("");

  return (
    <div className="App">
      <h1>Hello World in App.js</h1>
      {/* <button
        style={{ color: "red" }}
        onClick={() => {
          setState("about");
        }}
      >
        Show About
      </button> */}

      {/* <button
        style={{ color: "red" }}
        onClick={() => {
          setState("profile");
        }}
      >
        Show Profile
      </button> */}
      <BrowserRouter>
        <Link to="/about">About Page</Link>
        <br></br>
        <Link to="/profile">Profile</Link>
        <Routes>
          <Route element={<About />} path="/about" />
          <Route Component={Profile} path="/profile" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
