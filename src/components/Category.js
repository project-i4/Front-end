import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    // if (this.state.subCategory) return <Redirect to="/sub-category" />;

    return (
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "100px", marginLeft: "200px" }}
        >
          <Card style={{ width: "18rem", marginRight: "50px" }}>
            <Card.Img
              variant="top"
              src="https://www.themanufacturer.com/wp-content/uploads/2014/08/lcb-construction-cardiff1.jpg"
            />
            <Card.Body>
              <Card.Title>individual</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link className="btn btn-primary" to="/individual">
                Individual
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginLeft: "50px" }}>
            <Card.Img
              variant="top"
              src="https://cdn.vox-cdn.com/thumbor/eQiZjV12_vh3jknNrNRL134CXhM=/0x0:4600x3000/1200x800/filters:focal(1932x1132:2668x1868)/cdn.vox-cdn.com/uploads/chorus_image/image/61753523/shutterstock_617032220.0.jpg"
            />
            <Card.Body>
              <Card.Title>companies</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Category;

// <Card style={{ width: '18rem' }}>
//     <Card.Img variant="top" src="https://www.themanufacturer.com/wp-content/uploads/2014/08/lcb-construction-cardiff1.jpg" />
//     <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//             Some quick example text to build on the card title and make up the bulk of
//             the card's content.
// </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
// </Card>
