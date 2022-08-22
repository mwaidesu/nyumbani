import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Quotation() {
  return (
    <div className="quote">
      <h3 className="mb-4">Quotation</h3>
      <div className="row">
        <p className="col">Total:</p>
        <p className="col">Kshs 14,200</p>
      </div>
      <div className="row">
        <p className="col">Moving date:</p>
        <p className="col">19th August 2022</p>
      </div>
      <Form>
        <div className="center">
          <Button type="submit">Accept</Button>
          <Button>Decline</Button>
        </div>
      </Form>
    </div>
  );
}
