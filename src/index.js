import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Toaster
      toastOptions={{
        className: "",
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
          zIndex: "10000000",
          position: "relative",
        },
      }}
      position="bottom-right"
      reverseOrder={false}
    />
    <App />
  </>
);
