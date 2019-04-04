import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Individual from "./components/Individual";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Provider from "./components/Provider";
import CreateBusiness from "./components/CreateBusiness";
import MyBusinesses from "./components/MyBusinesses";
import EditBusiness from "./components/editeBusiness";
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
          <Route
            exact
            path="/"
            component={() => {
              return <Home />;
            }}
          />

          {/* MyBusinesses Route */}
          <Route exact path="/My_businesses" component={MyBusinesses} />
          {/* EditBusinesses Route */}
          <Route
            exact
            path="/My_businesses/edit/:id"
            component={EditBusiness}
          />

          {/* Individual Route */}
          <Route exact path="/individual" component={Individual} />

          {/* Individual Sub-catigory Route */}
          <Route exact path="/individual/:subCat" component={Provider} />
          <Route
            exact
            path="/individual/:subCat/:createBusiness"
            component={CreateBusiness}
          />

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

        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
