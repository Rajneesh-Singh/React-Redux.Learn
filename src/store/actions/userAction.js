import axios from "axios";

// import axios from 'axios'
export const UPDATE_USER = "UPDATE_USER";
export const EDIT_USER = "EDIT_USER";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const DELETE_USER = "DELETE_USER";
export const VIEW_USER_DETAILS = "VIEW_USER_DETAILS";

export const fetch_user = (data) => {
  console.log("userdata", data);
  return { type: UPDATE_USER, payload: data };
};

export const edit_user = (data) => {
  console.log("editdata", data);
  return { type: EDIT_USER, payload: data };
};

export const update_user = (data) => {
  console.log("editdata", data);
  return { type: UPDATE_USER_DETAILS, payload: data };
};

export const delete_user = (data) => {
  console.log("editdata", data);
  return { type: DELETE_USER, payload: data };
};

export const fetchViewUserDetails = (data) => {
  return function (dispatch) {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        console.log("data+++", response && response.data);
        dispatch({
          type: VIEW_USER_DETAILS,
          payload: response && response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
