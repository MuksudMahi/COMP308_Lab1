import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import auth from "../../Auth/auth";

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== undefined && password !== undefined) {
      auth.onAuthentication();
      auth.saveToken(email);
      navigate("/feedback", { replace: true });
    }
  };
  return (
    <FormLayout
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}

function FormLayout(props) {
  return (
    <div className="Login">
      <Form onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3" size="lg" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => props.setEmail(event.target.value)}
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => props.setPassword(event.target.value)}
            required={true}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
