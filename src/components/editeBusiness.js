import React, { Component, Fragment } from "react";
import apiUrl from "../apiConfig";
import { Redirect } from "react-router-dom";

class EditBusiness extends Component {
  state = {
    formData: {
      name: '',
      experience: "",
      address: ""
    },
    redirect: false
  };

  editBusniess = () => {
    let url = `${apiUrl}/My_businesses/edit/${this.props.match.params.id}`;

    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.formData.name,
        experience: this.state.formData.experience,
        address: this.state.formData.address
      })
    })
      .then(response => {
        response.json();
        this.setState({ redirect: true });
      })
      .then(data => {
        console.log("hsssssere", data);
      })
      .catch(e => console.log(e));
    this.setState({ redirect: true });
  };

  //   componentDidMount(){
  //       fetch(`${apiUrl}/business/${id}`).then();
  //       fetch(url)
  //       .then(res => res.json())
  //       .then(business => {
  //         this.setState({
  //           business: business.businesses
  //         });
  //         console.log(
  //           "qazwsx edcrfv",
  //           "this is url: ",
  //           url,
  //           "and this data: ",
  //           business
  //         );
  //       })
  //       .catch(e => console.log("this is the errrrorrr", e, url));
  //   }
  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
    console.log(this.props.match.params.name)
  };

  //   handleCreate = e => {
  //     e.preventDefault();

  //     let url = `${apiUrl}/My_businesses/edit/`;
  //     console.log("Ayman do fetch post for this ", url);
  //     console.log(this.state.formData);
  //     if (user)
  //       fetch(url, {
  //         method: "POST",
  //         mode: "cors",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(this.state.formData)
  //       })
  //         .then(res => {
  //           res.json();
  //           this.setState({ redirect: true });
  //         })
  //         .catch(e => console.log(e));
  //   };

  render() {
    return (
      <div>
        {/* <h1>Hello CreateBusiness</h1>
        <h2>here is {subCat}</h2>
        <h2>here is {createBusiness}</h2> */}
        {this.state.redirect ? <Redirect to={`/My_businesses`} /> : ""}
        <form onSubmit={this.editBusniess}>
          <div className="form-group">
            <label>Business Name </label>

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

export default EditBusiness;
