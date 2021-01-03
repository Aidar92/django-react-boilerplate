import React, { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const onChange = e => {
      setFormData(state => ({
          ...state,
          [e.target.name]: e.target.value
      }))
  }
  const onSignUpClick = () => {
      console.log("Sign up", formData);
  }
  return (
    <Container>
      <Row>
          <Col md="4">
              <h1>Sign up</h1>
              <Form>
                  <Form.Group controlId="usernameId">
                      <Form.Label>User name</Form.Label>
                      <Form.Control type="text" name="username" value={formData.username} placeholder="Enter user name" onChange={onChange} />
                      <FormControl.Feedback type="invalid"></FormControl.Feedback>
                  </Form.Group>
                  <Form.Group controlId="passwordId">
                      <Form.Label>Your password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Enter password" value={formData.password} onChange={onChange} />
                  </Form.Group>
              </Form>
              <Button color="primary" onClick={onSignUpClick}>Sign up</Button>
              <p className="mt-2">
                  Already have account? <Link to="/login">Login</Link>
              </p>
          </Col>
      </Row>
    </Container>
  );
};
