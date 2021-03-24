import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

// const reducer = (state , actions) =>{

const allReducers = combineReducers({ userData: userReducer });


const InitialState = {
  userData: [],
  editUserData: [],
};

//    const middleware = [thunk]

const store = createStore(
  allReducers,
  InitialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
console.log(store.getState());

export default store;
