import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Individual extends Component {
  render() {
    let subCategoriesArr = [
      {
        title: "Civil Engineer",
        description:
          "Aute et aute in commodo consectetur ex. Est ad consectetur velit pariatur pariatur ipsum ea veniam voluptate commodo cupidatat excepteur pariatur sit. Ex ut est reprehenderit in non ad tempor cillum qui aute in incididunt dolor. Ex sint sit commodo fugiat ex sint. Reprehenderit laborum laboris et ullamco eiusmod consectetur. Adipisicing qui mollit anim sint."
      },
      {
        title: "Architecture",
        description:
          "Mollit excepteur Lorem anim irure aute anim sit. In fugiat anim aliqua mollit dolor enim amet adipisicing do veniam eu commodo mollit. Mollit occaecat sunt incididunt in mollit incididunt velit qui est tempor aliquip ea tempor sunt."
      },
      {
        title: "Carpenter",
        description:
          "Nulla est laborum fugiat id irure sint. Do culpa voluptate ipsum proident. Dolor esse dolor adipisicing duis anim commodo mollit amet commodo occaecat nostrud eu aliqua dolor. Reprehenderit occaecat excepteur minim laboris eiusmod deserunt ullamco incididunt consequat aliquip eu. Quis aliqua laboris nisi sunt irure laboris occaecat in consequat."
      },
      {
        title: "plumber",
        description:
          "Laborum laborum cupidatat do cupidatat Lorem. Sunt qui enim elit id aute reprehenderit exercitation minim dolore. Non irure laborum ullamco commodo cupidatat quis velit et laborum elit consectetur ea enim. Consequat officia in ut ipsum nulla sunt duis officia. Aliquip ex ex deserunt minim exercitation id nulla sunt irure. Non non fugiat pariatur mollit in cupidatat mollit non."
      },
      {
        title: "Painter",
        description:
          "Adipisicing fugiat qui ullamco tempor. Elit amet laboris eu duis excepteur ullamco proident. Anim sunt est in duis pariatur consequat ullamco nisi deserunt esse aliquip aliqua magna velit. Exercitation reprehenderit Lorem excepteur fugiat ut deserunt magna non adipisicing et exercitation exercitation voluptate. Officia occaecat cillum consectetur ad occaecat nostrud reprehenderit ipsum dolor exercitation cillum proident."
      },
      {
        title: "Electrician",
        description:
          "Lorem consequat anim voluptate minim. Deserunt enim deserunt deserunt ullamco exercitation aliquip. Anim mollit ex in adipisicing ea proident irure sunt incididunt."
      }
    ];
    let subCategories = subCategoriesArr.map(SubCatigory => (
      <Card style={{ width: "21rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>{SubCatigory.title}</Card.Title>
          <Card.Text>{SubCatigory.description}</Card.Text>
          {/* {aaa = `/individual/${card}`} */}

          <Link to={`/individual/${SubCatigory.title}`}>
            {SubCatigory.title}
          </Link>
        </Card.Body>
      </Card>
    ));
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">{subCategories}</div>
      </div>
    );
  }
}

export default Individual;
