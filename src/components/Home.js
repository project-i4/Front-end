import React, { Component } from "react";
import Profile from "./Profile";
import Category from "./Category";
import { Route } from "react-router-dom";
class Home extends Component {
  render() {
    return <Route path="/" component={Category} />;
  }
}

export default Home;
