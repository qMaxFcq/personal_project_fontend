import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Router from "../src/route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </>
  );
}

export default App;
