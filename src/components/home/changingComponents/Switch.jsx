// import "./Switch.css";
// import { div, div, div } from "react-bootstrap";
import { useState } from "react";
import Location from "./Location";
import StepTwo from "./StepTwo";
import Final from "./Final";
import Start from "./Start";
import "../../../App.css";

function Switch() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    company: "",
    distance: "",
    house: "",
    date: "",
    time: "",
    quote: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    case 1:
      return (
        <div className="Switch">
          <div className="progressbar">
            <div
              style={{
                width: "25%",
              }}
            ></div>
          </div>

          <Start nextStep={nextStep} />
        </div>
      );

    case 2:
      return (
        <div className="Switch text-black">
          <div>
            <div>
              <div
                // md={{ span: 6, offset: 3 }}
                className="custom-margin text-black"
              >
                <div className="progressbar">
            <div
              style={{
                width: "50%",
              }}
            ></div>
          </div>
                <Location
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </div>
            </div>
          </div>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 3:
      return (
        <div className="Switch ">
          <div>
            <div>
              <div className="custom-margin">
                <div className="progressbar">
                  <div
                    style={{
                      width: "75%",
                    }}
                  ></div>
                </div>

                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </div>
            </div>
          </div>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 4:
      return (
        <div className="Switch">
          <div>
            <div>
              <div md={{ span: 6, offset: 3 }} className="custom-margin">
                <div className="progressbar">
                  <div
                    style={{
                      width: "100%",
                    }}
                  ></div>
                </div>
                <Final values={formData} prevStep={prevStep} />
              </div>
            </div>
          </div>
        </div>
      );
    // default case to show nothing
    default:
      return <div className="Switch"></div>;
  }
}

export default Switch;
