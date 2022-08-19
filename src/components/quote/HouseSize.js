import React from "react";
import { Form, Button } from "react-bootstrap";

export default function HouseSize() {
  return (
    <div className="quote">
      <h3 className="mb-4">House Size</h3>
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
        <div className="row">
          <h4>Moving date</h4>
          <Form.Group className="col" id="date">
            <Form.Label>Date</Form.Label>
            <Form.Control className="form-quote" type="date" />
          </Form.Group>
          <Form.Group className="col" id="time">
            <Form.Label>Time</Form.Label>
            <Form.Control className="form-quote" type="time" />
          </Form.Group>
        </div>
        <div className="center">
          <Button type="submit">Next</Button>
        </div>
      </Form>
    </div>
  );
}
