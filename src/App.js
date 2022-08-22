import { useState } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import { AuthContext } from "./context/AuthContext";
// import { QuoteContext } from "./context/QuoteContext";

function App() {
  // const [quote, setQuote] = useState({
  //   origin: "",
  //   destination: "",
  //   movers: "",
  //   distance: "",
  //   houseSelect: "",
  //   date: "",
  //   time: "",
  //   total: "",
  // });

  const [auth, setAuth] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    currentUser: "",
  });

  function signinCallback() {
    console.log("perform sign in");
  }
  function signupCallback() {
    console.log("perform sign up");
  }
  function signoutCallback() {
    console.log("perform sign out");
  }

  // const quoteData = {
  //   quote,
  //   setQuote,
  // };

  const authData = {
    auth,
    setAuth,
    signinCallback,
    signupCallback,
    signoutCallback,
  };

  return (
    <>
      <AuthContext.Provider value={authData}>
        {/* <QuoteContext.Provider value={quoteData}> */}
          {/* Main page goes here */}
          {/* <Container> */}
            {/* Other sections */}
            {/* get a quote */}
            
              
              <Signin />
              <Signup/>
            
            
            {/* get a quote ends here */}
            {/* other sections */}
            {/* </Container> */}
          {/* mainpage ends here */}
        {/* </QuoteContext.Provider> */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
