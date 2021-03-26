import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Apps from "./Route";
import index from "./store/index";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
    <Apps />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
