import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { solveGrid } from "./solver";

console.log(solveGrid(5, 5).toString());
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

