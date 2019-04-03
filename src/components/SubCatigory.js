import React, { Component } from "react";

class SubCatigory extends Component {
  render() {
    const { subCat } = this.props.match.params;
    const users = ["aa", "bb", "cc", "dd", "ee"];
    return <h1>{subCat}</h1>;
  }
}

export default SubCatigory;
