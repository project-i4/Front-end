import React from "react";
import { Link } from "react-router-dom";

const authenticatedOptions = (changeActivePage, onSignout) => (
  <React.Fragment>
    <li className="nav-item">
      <div className="nav-link">
        <Link to="/change-password">Change Password</Link>
      </div>
    </li>
    <li className="nav-item" onClick={() => onSignout()}>
      <div className="nav-link">Sign Out</div>
    </li>
  </React.Fragment>
);

const unauthenticatedOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item">
      <div className="nav-link">
        <Link to="/sign-in">Sign In</Link>
      </div>
    </li>
    <li className="nav-item">
      <div className="nav-link">
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </li>
  </React.Fragment>
);

const alwaysOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item">
      <div className="nav-link">
        <Link to="/">Home</Link>
      </div>
    </li>
  </React.Fragment>
);

const Nav = ({ user, changeActivePage, onSignout }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand">Navbar</div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {alwaysOptions(changeActivePage)}

        {user
          ? authenticatedOptions(changeActivePage, onSignout)
          : unauthenticatedOptions(changeActivePage)}
        {/* {user && (
          <li className="nav-item">
            <div className="nav-link"> Hola, {user.email.split("@")[0]}</div>
          </li>
        )} */}
      </ul>
    </div>
  </nav>
);

export default Nav;
