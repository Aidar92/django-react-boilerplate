import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Note } from "./Note";
import { getNotes } from "./NotesActions";

export const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])
  return notes.notes.length === 0 ? (
    <h2>Please add your first note</h2>
  ) : (
    <div>
      <h2>Notes</h2>
      {notes.notes.map((note) => (
        <Note key={`note_${note.id}`} note={note} />
      ))}
      <hr />
    </div>
  );
};
