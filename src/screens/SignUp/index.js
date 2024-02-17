import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
const [userDetails, setUserDetails] = useState({});
const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div class="card login-container">
    <div class="card-body">
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNo">
          <Form.Label>Contact Number</Form.Label>
            <Form.Control required type="tel" placeholder='Phone Number'  />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default SignUp;
