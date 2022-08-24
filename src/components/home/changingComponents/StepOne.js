import React, { useState } from "react";
// import { form, div, button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values, prevStep }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.origin) ||
      validator.isEmpty(values.destination)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div classname="mx-auto">
      {/* <div style={{ marginTop: 100 }}>
        <div>
          <form onSubmit={submitFormData}>
            <div className="mb-3">
              <label>Origin</label>
              <input
                style={{ border: error ? "2px solid red" : "" }}
                name="origin"
                defaultValue={values.origin}
                type="text"
                placeholder="Origin"
                onChange={handleFormData("origin")}
              />
              {error ? (
                <p style={{ color: "red" }}>This is a required field</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label>Destination</label>
              <input
                style={{ border: error ? "2px solid red" : "" }}
                name="destination"
                defaultValue={values.destination}
                type="text"
                placeholder="Destination"
                onChange={handleFormData("destination")}
              />
              {error ? (
                <p style={{ color: "red" }}>This is a required field</p>
              ) : (
                ""
              )}
            </div>
            <button variant="primary" type="submit">
              Continue
            </button>
          </form>
        </div>
      </div> */}

      <form onSubmit={submitFormData}>
        <div className="mb-6">
          <label
            for="origin"
            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your origin
          </label>

          <input
            type="text"
            id="origin"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light peer"
            placeholder="Enter first location"
            required
            name="origin"
            defaultValue={values.origin}
            onChange={handleFormData("origin")}
          />

          {/* <p class="invisible peer-invalid:visible text-red-700 font-light">
          Please enter origin
        </p> */}
          {error ? (
            <p style={{ color: "red" }}>This is a required field</p>
          ) : (
            ""
          )}
        </div>

        <div className="mb-6">
          <label
            for="destination"
            className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Your destination
          </label>
          <input
            type="destination"
            id="destination"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light peer"
            placeholder="Enter second location"
            required
            name="destination"
            defaultValue={values.destination}
            onChange={handleFormData("destination")}
          />
          {/* <p class="invisible peer-invalid:visible text-red-700 font-light">
          Please enter destination
        </p> */}

          {error ? (
            <p style={{ color: "red" }}>This is a required field</p>
          ) : (
            ""
          )}
        </div>

        {/* <label
          for="companies"
          class="block mb-2 text-sm font-medium text-white dark:text-gray-400"
        >
          Select an option
        </label>
        <select
          id="companies"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 peer"
          // value={formData.company}
          name="company"
          required
          defaultValue={values.company}
          onChange={handleFormData("company")}
        >
          <option selected>Choose a moving company</option>
          <option value="MoversNShakers">MoversNShakers</option>
          <option value="OfisiMove">OfisiMove</option>
          <option value="UtahamaLini">UtahamaLini?</option>
        </select> */}

        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={prevStep}>
              Previous
            </button>

            <button className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" type="submit" onClick={nextStep}>
              Next
            </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
