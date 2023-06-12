import React from "react";

export default function CustomerIndatabase() {
  return (
    <div className="flex justify-between mb-10">
      <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
        All Customer
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
          <img src="https://wann.io/images/wann-logo.png" alt="wannlogo" />
        </div>
      </div>
      <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
        Customer Status OK
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
          <img src="https://wann.io/images/wann-logo.png" alt="wannlogo" />
        </div>
      </div>
      <div className="bg-white max-w-[30rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem] p-10 shadow-lg shadow-slate-400 rounded-xl">
        Customer Status Not OK
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
          <img src="https://wann.io/images/wann-logo.png" alt="wannlogo" />
        </div>
      </div>
    </div>
  );
}
