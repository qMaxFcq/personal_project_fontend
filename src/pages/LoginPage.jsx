import React from "react";
import LoginForm from "../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
      <div className="max-w-[25rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem]">
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
          <img
            src="https://wann.io/images/wann-logo.png"
            // className="-m-7 h-[6.625rem]"
            alt="fakebook-logo"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center ">
          <div className="">
            <LoginForm />
          </div>
        </h2>
      </div>
    </div>
  );
}
