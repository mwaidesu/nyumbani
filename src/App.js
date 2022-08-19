import {useState} from 'react';
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
  total: ""
});



const quoteData = {
  quote,
  setQuote
};

  return (
    <>
      <AuthContext.Provider>
        <QuoteContext.Provider value={quoteData}>
          <Container className="quote-container">
            <Location />
            <Destination />
            <HouseSize />
            <Quotation />
          </Container>
        </QuoteContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
