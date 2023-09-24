import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const htmlElement = document.querySelector("html");
if (htmlElement?.getAttribute("data-bs-theme") === "auto") {
  function updateTheme() {
    htmlElement?.setAttribute(
      "data-bs-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", updateTheme);
  updateTheme();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
