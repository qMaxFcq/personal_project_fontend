import React from "react";
import CustomerContainer from "../features/auth/components/CustomerContainer";

export default function HomePage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[1075px]:justify-center ">
      <div className="bg-white  w-[80rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
        <div className="pb-5 flex justify-center "></div>
        <h2 className="text-2xl font-mono text-center ">
          <div>
            <CustomerContainer />
          </div>
        </h2>
      </div>
    </div>
  );
}
