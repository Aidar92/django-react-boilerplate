import axios from "axios";
import { toast } from "react-toastify";
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS,
} from "./SignupTypes";
axios.defaults.baseURL = "http://127.0.0.1:8000";
export const signupNewUser = (userData) => (dispatch) => {
  dispatch({ type: CREATE_USER_SUBMITTED });
  axios
    .post("/api/v1/users/", userData)
    .then((res) => {
      toast.success(
        `Account for ${userData.username} created succesfully. Please login.`
      );
      dispatch({ type: CREATE_USER_SUCCESS });
    })
    .catch((err) => {
      if (err.response) {
        toast.error(JSON.stringify(err.response.data));
        dispatch({
          type: CREATE_USER_ERROR,
          errorData: err.response.data,
        });
      } else if (err.message) {
        toast.error(JSON.stringify(err.message));
      } else {
        toast.error(JSON.stringify(err));
      }
    });
};
