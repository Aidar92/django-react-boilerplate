import { ADD_NOTE, DELETE_NOTE, GET_NOTES, UPDATE_NOTE } from "./NotesTypes";

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((item, index) => item.id !== action.payload),
      };
    case UPDATE_NOTE:
      const updatedNotes = state.notes.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              ...action.payload,
            }
          : item
      );
      return {
        ...state,
        notes: updatedNotes,
      };
    default:
      return state;
  }
};
