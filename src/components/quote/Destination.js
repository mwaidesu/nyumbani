import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Destination() {
  return (
    <div className="quote">
      <h3 className="mb-4">Destination Confirmation</h3>
      <div className="row">
          <p className="col">Origin</p>
          <p className="col">Kahawa Sukari</p>
      </div>
      <div className="row">
          <p className="col">Destination</p>
          <p className="col">Kilimani</p>
      </div>
      <div className="row">
          <p className="col">Moving Company</p>
          <p className="col">Movers N Shakers</p>
      </div>
      <div className="row">
          <p className="col">Kilometers</p>
          <p className="col">14</p>
      </div>
      <Form>
        <div className="center">
          <Button type="submit">Next</Button>
        </div>
      </Form>
    </div>
  );
}
