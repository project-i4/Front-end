import React from "react";
import Profile from "./Profile";
import Category from "./Category";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <Router>
      <Route path="/" component={Category} />
      {/* <Link to={`${match.url}/rendering`}>Rendering with React</Link> */}

      {/* <Link to="/profile">Profile</Link> */}
    </Router>
  );
};

export default Home;
