import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";
import axios from "axios";

const Axios = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: {
    "content-type": "application/json"
  }
});

export default Axios;

ReactDOM.render(<App />, document.getElementById("root"));
