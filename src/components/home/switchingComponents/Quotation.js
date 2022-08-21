import React from "react";
// import { Form, Button } from "react-bootstrap";

function Quotation({formData}) {
  return (
    <div className="quote">
      {/* <h3 className="mb-4">Quotation</h3> */}
      <div className="row flex">
        <p className="col">Total:</p>
        <p className="col ml-4">Kshs 14,200</p>
      </div>
      <div className="row flex">
        <p className="col">Moving date:</p>
        <p className="col ml-4">{formData.date}</p>
      </div>

      <div className="row flex">
        <p className="col">Moving Time</p>
        <p className="col ml-4">{formData.time}</p>
      </div>
      {/* <Form>
        <div className="center">
          <Button type="submit">Accept</Button>
          <Button>Decline</Button>
        </div>
      </Form> */}
    </div>

    
  );
}

export default Quotation;
