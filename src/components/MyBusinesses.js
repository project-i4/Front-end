import React, { Component, Fragment } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyBusinesses extends Component {
  state = {
    business: []
  };
  componentDidMount() {
    console.log("heeerreeeeeeeee ");
    const user = getUser();
    console.log("user in mybusi..", user);

    let url = `${apiUrl}/My_businesses/${user.id}`;
    // let url = `${apiUrl}/individual/Contractor`;
    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(business => {
        this.setState({
          business: business.businesses
        });
        console.log(
          "qazwsx edcrfv",
          "this is url: ",
          url,
          "and this data: ",
          business
        );
      })
      .catch(e => console.log("this is the errrrorrr", e, url));
  }

  deleteBusniess = id => {
    let url = `${apiUrl}/My_businesses/delete/${id}`;

    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "DELETE"
    })
      .then(response => {
        response.json();
      })

      .then(data => {
        console.log("hsssssere", data);
      })
      .catch(e => console.log(e));
    this.componentDidMount();
  };

  render() {
    const user = getUser();
    console.log("user in mybusi..", user);

    let businessCard = this.state.business.map(card => {
      return (
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div
            class="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img
                        class=" img-fluid"
                        src="https://www.localytics.com/wp-content/themes/localytics/images/profiles/personalize.png"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">{card.name}</h4>
                    <p class="card-text">{card.experience}</p>
                    <a href="#" class="btn btn-primary btn-sm">
                      <i class="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">{card.name}</h4>
                    <p class="card-text">
                      {card.experience},
                      ...............................................................
                    </p>
                    <Link
                    className="btn btn-warning mr-2" params={{ id: card.id, name: card.name }}
                      to={`/My_businesses/edit/${card.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => this.deleteBusniess(card.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="#"
                        >
                          <i class="fa fa-facebook" />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="#"
                        >
                          <i class="fa fa-twitter" />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="#"
                        >
                          <i class="fa fa-skype" />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center"
                          target="_blank"
                          href="#"
                        >
                          <i class="fa fa-google" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div>{businessCard}</div>;
  }
}

export default MyBusinesses;
