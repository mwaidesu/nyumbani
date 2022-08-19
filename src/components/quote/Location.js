import { Form, Button } from "react-bootstrap";

export default function Location() {
  return (
    <div className="quote">
      <h3>Choose Location</h3>
      <Form>
        <div className="row">
          <Form.Group className="col" id="origin">
            <Form.Label>Origin</Form.Label>
            <Form.Control className="form-quote" type="text" />
          </Form.Group>
          <Form.Group className="col" id="destination">
            <Form.Label>Destination</Form.Label>
            <Form.Control className="form-quote" type="text" />
          </Form.Group>
        </div>

        <div>
          <Form.Select id="movers">
            <option value="ofisiMove">Ofisi Move</option>
            <option value="moversNShakers">Movers N Shakers</option>
            <option value="utahamaLini">Utahama Lini</option>
          </Form.Select>
        </div>
        <div className="center">
          <Button type="submit">Next</Button>
        </div>
      </Form>
    </div>
  );
}
