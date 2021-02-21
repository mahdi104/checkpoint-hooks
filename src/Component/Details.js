import React from "react";
import { Card } from "react-bootstrap";

const Details = ({ location, history }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={location.state.el.image} />
        <Card.Body>
          <Card.Text>{location.state.el.description}</Card.Text>
        </Card.Body>
      </Card>
      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "2%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Details;
