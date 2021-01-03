import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./login/LoginActions";
import { AddNote } from "./notes/AddNote";
import { NotesList } from "./notes/NotesList";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User: <b>{auth.user.username}</b>
          </Navbar.Text>
          <Nav.Link onClick={onLogout}>Logout</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <NotesList />
        <AddNote />
      </Container>
    </div>
  );
};
