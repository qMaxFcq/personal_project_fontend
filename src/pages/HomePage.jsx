import React from "react";
import CustomerContainer from "../features/auth/components/CustomerContainer";

export default function HomePage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[3rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center ">
      <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[130rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start"></div>
        {/* <h1 className="font-mono flex justify-center text-7xl mb-7 -mt-5">
          Add Customer
        </h1> */}

        <h2 className="text-2xl font-mono text-center ">
          <div className="">
            <CustomerContainer />
          </div>
        </h2>
      </div>
    </div>
  );
}
