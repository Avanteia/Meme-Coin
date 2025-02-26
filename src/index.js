import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter"; // Import external router

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
