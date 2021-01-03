import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "./NotesActions";

export const Note = ({ note }) => {
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(deleteNote(note.id));
  };
  const onUpperCaseClick = () => {
    dispatch(
      updateNote(note.id, {
        content: note.content.toUpperCase(),
      })
    );
  };
  const onLowerCaseClick = () => {
    dispatch(
      updateNote(note.id, {
        content: note.content.toLowerCase(),
      })
    );
  };
  return (
    <div>
      <hr />
      <p>
        (id: {note.id}) {note.content}
      </p>
      <Button variant="secondary" size="sm" onClick={onUpperCaseClick}>
        Upper case
      </Button>{" "}
      <Button variant="info" size="sm" onClick={onLowerCaseClick}>
        Lower case
      </Button>{" "}
      <Button variant="danger" size="sm" onClick={onDeleteClick}>
        Delete
      </Button>
    </div>
  );
};
