import { UPDATE_USER } from "../actions/userAction";
import { EDIT_USER } from "../actions/userAction";
import { UPDATE_USER_DETAILS } from "../actions/userAction";
import { DELETE_USER } from "../actions/userAction";
import { VIEW_USER_DETAILS } from "../actions/userAction";

const InitialState = {
  userData: [],
  editData: [],
  viewData: [],
  deleteData: [],
};

const userReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER: {
      console.log("payload1", payload);
      return {
        ...state,
        userData: payload,
      };
    }
    case EDIT_USER: {
      console.log("payload2", payload);
      console.log("data+", state.userData);
      return {
        ...state,
        editData: payload,
      };
    }
    case UPDATE_USER_DETAILS: {
      console.log("payload3", payload);
      console.log("data+", state.userData);
      let data = [...state.userData];
      console.log("data++", data);
      let index = data.findIndex((val) => val.id === payload.id);
      console.log("index", index);
      data[index] = payload;
      return {
        ...state,
        userData: data,
        editData: [],
      };
    }
    case DELETE_USER: {
      console.log("payload3", payload);
      console.log("data+", state.userData);
      let data = [...state.userData];
      console.log("data++", data);
      let index = data.findIndex((val) => val.id === payload);
      console.log("index", index);
      if (index === 0) {
        data.splice(index, 1);
      } else {
        data.splice(index, 1);
      }
      console.log("data3", data);
      return {
        ...state,
        userData: data,
        deleteData: payload,
      };
    }
    case VIEW_USER_DETAILS: {
      console.log("payload2", payload);
      console.log("data+", state.userData);
      return {
        ...state,
        viewData: payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
