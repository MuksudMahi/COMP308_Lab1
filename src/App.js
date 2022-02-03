import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Feedback from "./components/Feedback/Feedback";
import Thanks from "./components/Thanks/Thanks";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
