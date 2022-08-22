import React, { useRef, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { signinCallback, signoutCallback } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("perform signin");

      setError("");
      setLoading(true);

      const res = await signinCallback(
        emailRef.current.value,
        passwordRef.current.value
      );

      console.log("response below");

      console.log(
        `email: ${emailRef.current.value} and pw: ${passwordRef.current.value}`
      );

      console.log(res);

      if (res.id) {
        console.log("success");
      } else if (res.errors) {
        console.log(`errors: ${res.errors}`);
        setError(res.errors);
      }

    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="w-2/5 items-center mt-4 login">
      {error && (
        <div
          style={{
            backgroundColor: "pink",
            height: "30px",
            margin: "16px"
          }}
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl my-5">Sign In</h2>

        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          Sign In
        </button>
      </form>

      <div>
        <span className="float-right">Don't have an account? Sign Up</span>
      </div>
    </div>
  );
}

export default SignIn;
