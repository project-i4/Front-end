import React from "react";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <Router>
      <Route path="/profile" component={Profile} />
    </Router>
  );
};

export default Home;
