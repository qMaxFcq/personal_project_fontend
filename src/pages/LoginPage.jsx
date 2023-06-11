import React from "react";
import LoginForm from "../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    // <div className="p-4 border">
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center ">
      <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
          <img
            src="https://wann.io/images/wann-logo.png"
            alt="fakebook-logo"
            // className="-m-7 h-[6.625rem]"
          />
        </div>
        <h1 className="font-mono flex justify-center text-2xl mb-3">
          Customer Relationship Management
        </h1>

        <h2 className="text-2xl font-mono text-center ">
          <div className="">
            <LoginForm />
          </div>
        </h2>
      </div>
    </div>
    // </div>
  );
}
