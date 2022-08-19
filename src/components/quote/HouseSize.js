import React from "react";
import { Form, Button } from "react-bootstrap";

export default function HouseSize() {
  return (
    <div className="quote">
      <h3>House Size</h3>
      <Form>
        <div className="center">
          <Form.Check
            inline
            type="radio"
            id="2bedroom"
            label="2 Bedroom"
            name="houseSelect"
          />
          <Form.Check
            inline
            type="radio"
            id="1bedroom"
            label="1 Bedroom"
            name="houseSelect"
          />
          <Form.Check
            inline
            type="radio"
            id="bedsitter"
            label="Bedsitter"
            name="houseSelect"
          />
          <Form.Check
            inline
            type="radio"
            id="studio"
            label="Studio"
            name="houseSelect"
          />
        </div>
        <div className="center">
          <Button>Next</Button>
        </div>
      </Form>
    </div>
  );
}
