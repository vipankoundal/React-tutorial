import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Dstate from "./context/State";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Dstate>
    <App />
  </Dstate>
);
