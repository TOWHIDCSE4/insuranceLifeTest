import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./helper/i18n";
import "./assets/scss/styles.scss";
import App from "./App";
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer position="bottom-right" theme="colored" />
    </PersistGate>
  </Provider>
);

reportWebVitals();
