import { useState } from "react";
import "./App.css";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Destination from "./components/quote/Destination";
import HouseSize from "./components/quote/HouseSize";
import Quotation from "./components/quote/Quotation";
import Location from "./components/quote/Location";

import { Container } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { QuoteContext } from "./context/QuoteContext";

function App() {
  const [quote, setQuote] = useState({
    origin: "",
    destination: "",
    movers: "",
    distance: "",
    houseSelect: "",
    date: "",
    time: "",
    total: "",
  });

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

  const quoteData = {
    quote,
    setQuote,
  };

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
        <QuoteContext.Provider value={quoteData}>
          {/* Main page goes here */}
          <> 
            {/* Other sections */}
            {/* get a quote */}
            <Container className="quote-container">
              <Location />
              <Destination />
              <HouseSize />
              <Quotation />
            </Container>
            {/* get a quote ends here */}
            {/* other sections */}
          </>
          {/* mainpage ends here */}
        </QuoteContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
