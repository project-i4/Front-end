import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SubCategory from "./components/SubCategory";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
class App extends Component {
  state = {
    user: null,
    activePage: "home",
    redirect: false
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActivePage = activePage => {
    this.setState({ activePage });
  };

  setRedirect = redirect => {
    this.setState({
      redirect
    });
  };

  onSignin = () => {
    this.setState({ user: getUser() });
    this.setRedirect(true);
    this.changeActivePage("profile");
  };

  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage, redirect } = this.state;
    return (
      <Router>
        <div>
          <Route
            path="/"
            component={() => {
              return (
                <Nav
                  user={user}
                  changeActivePage={this.changeActivePage}
                  onSignout={this.onSignout}
                />
              );
            }}
          />

          <div className="container">
            {/* {activePage === "home" ? <Home /> : ""} */}
            {/* Home Route */}
            <Route exact path="/" component={Home} />

            <Route path="/sub-category" component={SubCategory} />

            {/* Sign In Route */}
            <Route
              path="/sign-in"
              component={() => <SigninForm onSignin={this.onSignin} />}
            />
            {/* Sign Up Route */}
            <Route
              path="/sign-up"
              component={() => <SignupForm onSignin={this.onSignin} />}
            />
            {/* Change Password Route */}
            <Route path="/change-password" component={ChangePasswordForm} />

            {/* Profile Route */}
            <Route path="/profile" component={Profile} />
            {activePage === "profile" && redirect ? (
              <div>
                {this.setRedirect(false)}
                <Redirect to="/profile" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
