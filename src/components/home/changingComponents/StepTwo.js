import React, { useState } from "react";
// import { Form, div, button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.date) || validator.isEmpty(values.time)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>

      <div className="w-5/5 mx-auto">
        <form onSubmit={submitFormData}>
          <div>
          <label
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
        </select>

          </div>
          <div className="mb-6">
            <label
              for="house"
              class="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              House Size
            </label>
            <select
              id="house"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="house"
              defaultValue={values.house}
              onChange={handleFormData("house")}
            >
              <option selected>Choose your house size</option>
              <option value="2Bedroom">2 Bedroom</option>
              <option value="1Bedroom">1 Bedroom</option>
              <option value="Bedsitter">Bedsitter</option>
              <option value="Studio">Studio</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              for="date"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Moving Date
            </label>
            <input
              type="date"
              id="date"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light peer"
              placeholder="Enter first location"
              required
              onChange={handleFormData("date")}
              name="date"
              defaultValue={values.date}
            />
            {/* <p class="invisible peer-invalid:visible text-red-700 font-light">
            Please enter date
          </p> */}

            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label
              for="time"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Perfect Moving Time
            </label>
            <input
              type="time"
              id="time"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light peer"
              placeholder="Enter second location"
              required
              onChange={handleFormData("time")}
              name="lastName"
              defaultValue={values.time}
            />
            {/* <p class="invisible peer-invalid:visible text-red-700 font-light">
            Please enter time
          </p> */}

            {error ? (
              <p style={{ color: "red" }}>This is a required field</p>
            ) : (
              ""
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={prevStep}>
              Previous
            </button>

            <button className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" type="submit">
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepTwo;
