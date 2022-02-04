import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Feedback from "./components/Feedback/Feedback";
import Thanks from "./components/Thanks/Thanks";
import auth from "./Auth/auth";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route
            path="/feedback"
            element={
              <RequireAuth>
                <Feedback />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/thanks"
            element={
              <RequireAuth>
                <Feedback />
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function RequireAuth(props) {
  let location = useLocation();
  if (!auth.getLogInStatus())
    return <Navigate to="/" state={{ from: location }} replace />;
  return props.children;
}

export default App;
