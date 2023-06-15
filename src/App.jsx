import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import Router from "../src/route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  const initialLoading = useSelector((state) => state.auth.initialLoading);
  if (initialLoading) {
    return <Loading />;
  }

  
  return (
    <>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </>
  );
}

export default App;
