import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Category from './components/Category'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  state = {
    user: null,
    activePage: "home"
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
  onSignin = () => {
    this.setState({ user: getUser() });
    // this.changeActivePage("profile");
  };
  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage } = this.state;
    return (
      <div>
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />
        <Category />
        {/* <div className="container">
          {activePage === "home" ? <Home /> : ""}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "profile" ? <Profile /> : ""}
        </div> */}
      </div>
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
            {/* {activePage === "profile" ? <Profile /> : ""} */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
