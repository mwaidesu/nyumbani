import "./App.css";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Destination from "./components/quote/Destination";
import HouseSize from "./components/quote/HouseSize";
import Quotation from "./components/quote/Quotation";
import Location from "./components/quote/Location";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="quote-container">
        <Destination />
        <HouseSize />
        <Location />
        <Quotation />
      </Container>
    </>
  );
}

export default App;
