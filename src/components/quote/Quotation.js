import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default function Quotation() {
  return (
    <div className='quote'>
        <h3>Quotation</h3>
        <Form>
            <Button>Accept</Button>
            <Button>Decline</Button>
        </Form>
    </div>
  )
}
