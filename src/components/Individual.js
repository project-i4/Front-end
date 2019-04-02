import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Individual extends Component {
  render() {
    let fakeData = ["a", "b", "c", "d", "e", "f"];
    let fakemap = fakeData.map(card => (
      <Card style={{ width: "21rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{card}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* {aaa = `/individual/${card}`} */}

          <Link to={`/individual/${card}`}>{card}</Link>
        </Card.Body>
      </Card>
    ));
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">{fakemap}</div>
      </div>
    );
  }
}

export default Individual;
