import React from "react";
import { FaHome } from "react-icons/fa";

const Start = ({ nextStep }) => {
  // const [step, setstep] = useState(1);

  const handleClick = () => {
    nextStep();
  };

  return (
    <div className="mx-auto w-1/5 center py-10">
      
      <div className="text-4xl">Get Started</div>
      <div className="">
        <div className="text-9xl py-5">
          <FaHome />
        </div>

        <button
          className="bg-transparent hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mx-auto"
          type="submit"
          onClick={handleClick}
        >
          Continue
        </button>

      </div>
    </div>
  );
};

export default Start;
