import React from "react";
// import { div } from "react-bootstrap";

const Final = ({ values , prevStep}) => {

    //destructuring the object from values
  const {  origin,
  destination,
  company,
  // distance,
  house,
  date,
  time, } = values;

  const handleSubmit =()=>{
    console.log({values})
  }
  return (
    <>


<div className="w-3/5 mx-auto">
      {/* <h3 className="mb-4">Quotation</h3> */}
      <div className="row flex my-3">
          <p className="col text-2xl">Origin: </p>
          <p className="col ml-4 text-2xl">{origin}</p>
      </div>
      <div className="row flex mb-2">
          <p className="col text-2xl">Destination: </p>
          <p className="col ml-4 text-2xl">{destination}</p>
      </div>
      <div className="row flex mb-2">
          <p className="col text-2xl">Moving Company: </p>
          <p className="col ml-4 text-2xl">{company}</p>
      </div>
      <div className="row flex mb-2">
          <p className="col text-2xl">Kilometers: </p>
          <p className="col ml-4 text-2xl">14 Kms</p>
      </div>
      <div className="row flex mb-2">
          <p className="col text-2xl">House: </p>
          <p className="col ml-4 text-2xl">{house}</p>
      </div>
      <div className="flex my-3">
        <p className="text-2xl">Total:</p>
        <p className="ml-4 text-2xl">Kshs 14,200</p>
      </div>
      <div className="flex mb-2">
        <p className=" text-2xl">Moving date:</p>
        <p className=" ml-4 text-2xl">{date}</p>
      </div>

      <div className="r flex mb-2">
        <p className=" text-2xl">Moving Time</p>
        <p className=" ml-4 text-2xl">{time}</p>
      </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={prevStep}>
              Try Again
            </button>

            

            <button className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" type="submit" onClick={handleSubmit}>
              Accept Quote
            </button>
        </div>
    </>
  );
};

export default Final;
