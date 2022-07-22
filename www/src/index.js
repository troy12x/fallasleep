import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/app.css";
import Navbar from "./components/Navbar";

import { StoreProvider } from "easy-peasy";
import UserStore from "./stores/UserStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider store={UserStore}>
    <BrowserRouter>
      <Navbar />

      <App />
    </BrowserRouter>
  </StoreProvider>
);
