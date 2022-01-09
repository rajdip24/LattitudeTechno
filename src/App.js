import React, { useState } from "react";
import {
  Link,
  Routes,
  Route,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import AddUsers from "./components/users/AddUsers";
import LoginPage from "./LoginPage";
import Main from "./Main";
import SignUp from "./SignUp";

function App() {
  return (
    <Router>
      <div>
        <h3>Pages</h3>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                Sign Up{" "}
              </Link>
            </li>
            <li>
              <NavLink to={"/LoginPage"} className="nav-link">
                Log In{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/mainpage" element={<Main />} />
          <Route exact path="/AddUsers" element={<AddUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
