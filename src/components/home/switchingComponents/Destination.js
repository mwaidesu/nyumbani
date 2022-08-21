import React from 'react'
// import { Form, Button } from "react-bootstrap";

const Destination = ({formData}) => {
  return (
    <div>
       {/* <h3 className="mb-4">Destination Confirmation</h3> */}
      <div className="row flex">
          <p className="col">Origin: </p>
          <p className="col ml-4">{formData.origin}</p>
      </div>
      <div className="row flex">
          <p className="col">Destination: </p>
          <p className="col ml-4">{formData.destination}</p>
      </div>
      <div className="row flex">
          <p className="col">Moving Company: </p>
          <p className="col ml-4">{formData.company}</p>
      </div>
      <div className="row flex">
          <p className="col">Kilometers: </p>
          <p className="col ml-4">14</p>
      </div>
      {/* <Form>
        <div className="center">
          <Button type="submit">Next</Button>
        </div>
      </Form> */}
    </div>
  )
}

export default Destination
