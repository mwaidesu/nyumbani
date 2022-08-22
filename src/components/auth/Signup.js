// import React, { useRef, useState, useContext } from "react";
// import { Form, Button, Card, Alert, Container } from "react-bootstrap";

// import { Link, useHistory } from "react-router-dom"

// // import { OurAuthContext } from "../contexts/OurAuthContext";


// export default function Signup() {
//   const emailRef = useRef();
//   const nameRef = useRef();
//   const phoneRef = useRef();
//   const passwordRef = useRef();
//   const passwordConfirmRef = useRef();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const history = useHistory()
// //   const { signup, setCurrentUser, setMemberId } = useContext(OurAuthContext);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match");
//     }

//     try {
//       // setError("");
//       // setLoading(true);

//       console.log("perform signup");
//     //   const res = await signup(emailRef.current.value, passwordRef.current.value);

//     //   if (res.id){
//     //     setCurrentUser(res.member_email);
//     //     setMemberId(res.id);
//     //     localStorage.setItem("savedUser", res.member_email);
//     //     history.push("/");
//     //   }
//     //   else if (res.error){
//     //     setError(res.error);
//     //   }
//       // history.push("/")
//     } catch {
//       setError("Failed to create an account");
//     }

//     // setLoading(false);
//   }

//   return (
//     <>
//       <Container
//         className="d-flex justify-content-center mt-4"
//         style={{ minHeight: "100vh" }}
//       >
//         <div className="w-100" style={{ maxWidth: "500px" }}>
//           <Card>
//             <Card.Body className="card-form">
//               <h3 className="mb-4">Sign Up</h3>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group id="name">
//                   <Form.Control placeholder="Name" type="text" ref={nameRef} required/>
//                 </Form.Group>
//                 <Form.Group id="email">
//                   <Form.Control placeholder="Email" type="email" ref={emailRef} required />
//                 </Form.Group>
//                 <Form.Group id="phone">
//                   <Form.Control placeholder="Phone Number" type="tel" ref={phoneRef} required />
//                 </Form.Group>
//                 <Form.Group id="password">
//                   <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
//                 </Form.Group>
//                 <Form.Group id="password-confirm">
//                   <Form.Control
//                     type="password"
//                     placeholder="Confirm Password"
//                     ref={passwordConfirmRef}
//                     required
//                   />
//                 </Form.Group>
//                 <Button
//                   variant="secondary"
//                   disabled={loading}
//                   className="w-100 mb-4"
//                   type="submit"
//                   // style={{ backgroundColor: "#FFBA00" }}
//                 >
//                   Sign Up
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//           <div className="w-100 text-center mt-2">
//             {/* Already have an account? <Link to="/login">Log In</Link> */}
//             Already have an account? Log In
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }
import React, { useRef, useState, useContext } from "react";

import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      // setError("");
      // setLoading(true);

      console.log("perform signup");
      //   const res = await signup(emailRef.current.value, passwordRef.current.value);

      //   if (res.id){
      //     setCurrentUser(res.member_email);
      //     setMemberId(res.id);
      //     localStorage.setItem("savedUser", res.member_email);
      //     history.push("/");
      //   }
      //   else if (res.error){
      //     setError(res.error);
      //   }
      // history.push("/")
    } catch {
      setError("Failed to create an account");
    }

    // setLoading(false);
  }

  return (
    <div className="w-2/5 items-center mt-4 login">
      <form onSubmit={handleSubmit}>
        <h2 className="text-4xl my-5">Sign Up</h2>
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
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
            class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@name.com"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Phone Number
          </label>
          <input
            ref={phoneRef}
            type="number"
            id="phone"
            class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="passwordConfirm"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Confirm password
          </label>
          <input
            ref={passwordConfirmRef}
            type="passwordConfirm"
            id="passwordConfirm"
            class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          Sign Up
        </button>
      </form>

      <div>
        <span className="float-right">Already have an account? Sign In</span>
      </div>
    </div>
  );
}

export default SignUp;