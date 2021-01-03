import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupNewUser } from "./signup/SignupActions";

export const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const createUser = useSelector(state => state.createUser)

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const onSignUpClick = () => {
    dispatch(signupNewUser(formData))
  };
  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Sign up</h1>
          <Form>
            <Form.Group controlId="usernameId">
              <Form.Label>User name</Form.Label>
              <Form.Control
                isInvalid={createUser.usernameError}
                type="text"
                name="username"
                value={formData.username}
                placeholder="Enter user name"
                onChange={onChange}
              />
              <FormControl.Feedback type="invalid">{createUser.usernameError}</FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="passwordId">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                isInvalid={createUser.passwordError}
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={onChange}
              />
              <FormControl.Feedback type="invalid">{createUser.passwordError}</FormControl.Feedback>
            </Form.Group>
          </Form>
          <Button color="primary" onClick={onSignUpClick}>
            Sign up
          </Button>
          <p className="mt-2">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
