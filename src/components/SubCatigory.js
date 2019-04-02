import React, { Component } from "react";

class SubCatigory extends Component {
  render() {
    const { subCat } = this.props.match.params;
    return <h1>{subCat}</h1>;
  }
}

export default SubCatigory;
