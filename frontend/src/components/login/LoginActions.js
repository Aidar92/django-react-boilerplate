import axios from "axios";
import { SET_CURRENT_USER, SET_TOKEN, UNSET_CURRENT_USER } from "./LoginTypes";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { setAxiosAuthToken, toastOnError } from "../../utils/Utils";
export const login = (userData, redirectTo) => (dispatch) => {
  axios.post("/api/v1/token/login/", userData).then((res) => {
    const { auth_token } = res.data;
    setAxiosAuthToken(auth_token)
    dispatch(setToken(auth_token))
    dispatch(getCurrentUser(redirectTo))
  }).catch(err => {
      dispatch(unsetCurrentUser())
      toastOnError(err)
  });
};

export const getCurrentUser = redirectTo => dispatch => {
    axios.get('/api/v1/users/me/')
    .then(res => {
        const user = {
            username: res.data.username,
            email: res.data.email
        }
        dispatch(setCurrentUser(user, redirectTo))
    })
    .catch(err => {
        dispatch(unsetCurrentUser())
        toastOnError(err)
    })
}

export const setCurrentUser = (user, redirectTo) => dispatch => {
    localStorage.setItem("user", JSON.stringify(user))
    dispatch({
        type: SET_CURRENT_USER,
        payload: user
    })
    console.log("set user", redirectTo);
    redirectTo !== "" && dispatch(push(redirectTo))
}

export const setToken = token => dispatch => {
    setAxiosAuthToken(token)
    localStorage.setItem("token", token)
    dispatch({
        type: SET_TOKEN,
        payload: token
    })
}

export const unsetCurrentUser = () => dispatch => {
    setAxiosAuthToken("")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    dispatch({
        type: UNSET_CURRENT_USER
    })
}

export const logout = () => dispatch => {
    axios.post("/api/v1/token/logout/")
    .then(() => {
        dispatch(unsetCurrentUser())
        dispatch(push("/"))
        toast.success("Logout successful")
    })
    .catch(err => {
        dispatch(unsetCurrentUser())
        toastOnError(err)
    })
}