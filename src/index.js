import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
