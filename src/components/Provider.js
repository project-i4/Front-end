import React, { Component } from "react";
import apiUrl from "../apiConfig";
import CreateBusiness from "./CreateBusiness";
import { Link } from "react-router-dom";
class Provider extends Component {
  state = {
    data: []
  };
    // subCat = this.props.match.params.subCat;
  componentDidMount() {
    console.log("heeerreeeeeeeee ");

    let url = `${apiUrl}/individual/${this.props.match.params.subCat}`;
    // let url = `${apiUrl}/individual/Contractor`;
    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
        console.log(
          "qazwsx edcrfv",
          "this is url: ",
          url,
          "and this data: ",
          data
        );
      })
      .catch(e => console.log("this is the errrrorrr", e, url));
  }

  render() {
    let providers = this.state.data.map(({ businesses }) => {
      let provider = businesses[0];
      console.log("inside map", provider.name);

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
                        src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                        alt="card image"
                      />
                    </p>
                    <h4 class="card-title">{provider.name}</h4>
                    <p class="card-text">{provider.experience}</p>
                    <a href="#" class="btn btn-primary btn-sm">
                      <i class="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center mt-4">
                    <h4 class="card-title">{provider.name}</h4>
                    <p class="card-text">
                      {provider.experience},
                      ...............................................................
                    </p>
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
    const { subCat } = this.props.match.params;

    return (
      <section id="team" class="pb-5">
        <div class="container">
          <h5 class="section-title h1">{subCat + "s"}</h5>
          <Link
            to={`/individual/${subCat}/createBusiness`}
            component={CreateBusiness}
          >
            Join us as {subCat}
          </Link>
          <div class="row">{providers}</div>
        </div>
      </section>
    );
  }
}

export default Provider;
