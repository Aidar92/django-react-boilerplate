import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { ADD_NOTE, DELETE_NOTE, GET_NOTES, UPDATE_NOTE } from "./NotesTypes";

export const getNotes = () => (dispatch) => {
  axios
    .get("/api/v1/notes/")
    .then((res) => {
      dispatch({
        type: GET_NOTES,
        payload: res.data,
      });
    })
    .catch(toastOnError);
};

export const addNote = (note) => (dispatch) => {
  axios
    .post("/api/v1/notes/", note)
    .then((res) => {
      dispatch({
        type: ADD_NOTE,
        payload: res.data,
      });
    })
    .catch(toastOnError);
};

export const deleteNote = (id) => (dispatch) => {
  axios
    .delete(`/api/v1/notes/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_NOTE,
        payload: id,
      });
    })
    .catch(toastOnError);
};

export const updateNote = (id, note) => (dispatch) => {
  axios
    .patch(`/api/v1/notes/${id}/`, note)
    .then((res) => {
      dispatch({
        type: UPDATE_NOTE,
        payload: res.data,
      });
    })
    .catch(toastOnError);
};
