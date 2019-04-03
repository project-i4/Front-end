import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class Profile extends Component {
  state = {
    name: "Ahmad",
    experience: "I'm a greet developer",
    address: "Riyadh",
    email: "ahmad@gmail.com",
    image: null
  };
  componentDidMount() {
    let userId = getUser().id;
    let url = `${apiUrl}/profile/${userId}`;
    fetch(url)
      //   .then(res => res.json())
      .then(user => console.log(user))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div class="prof">
        <div class="container">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>{this.state.name}</h5>
                  <h6>{this.state.experience}</h6>

                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{this.state.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>kshitighelani@gmail.com</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>123 456 7890</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div class="col-md-6">
                        <p>Web Developer and Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile

