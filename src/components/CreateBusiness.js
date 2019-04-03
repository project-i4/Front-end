import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
import { Redirect } from "react-router-dom";
class CreateBusiness extends Component {
  proops = this.props.match.params;
  user = getUser();
  state = {
    formData: {
      name: null,
      category: "individual",
      sub_category: this.proops.subCat,
      experience: null,
      address: null,
      user_id: this.user.id
    },
    redirect: false
  };
  handleCreate = e => {
    e.preventDefault();
    const user = getUser();
    let url = `${apiUrl}/individual/create_business`;
    console.log("Ayman do fetch post for this ", url);
    console.log(this.state.formData);
    if (user)
      fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.formData)
      })
        .then(res => {
          res.json();
          this.setState({ redirect: true });
        })
        .catch(e => console.log(e));
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    console.log(this.proops);

    const { subCat, createBusiness } = this.props.match.params;
    return (
      <div>
        {/* <h1>Hello CreateBusiness</h1>
        <h2>here is {subCat}</h2>
        <h2>here is {createBusiness}</h2> */}
        {this.state.redirect ? (
          <Redirect to={`/individual/${this.state.formData.sub_category}`} />
        ) : (
          ""
        )}
        <form onSubmit={this.handleCreate}>
          <div className="form-group">
            <label>Name </label>
            <input
              name="name"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Experience</label>
            <input
              name="experience"
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />
            <label>Address</label>
            <input
              name="address"
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default CreateBusiness;
