import React from "react";
import { FaHome } from "react-icons/fa";

const Start = ({ nextStep }) => {
  // const [step, setstep] = useState(1);

  const handleClick = () => {
    nextStep();
  };

  return (
    <div className="w-3/5 mx-auto">
      <div className="">
        <div className="text-9xl">
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
