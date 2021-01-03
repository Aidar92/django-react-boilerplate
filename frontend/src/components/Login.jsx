import React, { useState } from "react";
import { Col, Container, Form, FormControl, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
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
              <h1>Login</h1>
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
              <Button color="primary" onClick={onSignUpClick}>Login</Button>
              <p className="mt-2">
                  Don't have account? <Link to="/signup">Sign up</Link>
              </p>
          </Col>
      </Row>
    </Container>
  );
};
