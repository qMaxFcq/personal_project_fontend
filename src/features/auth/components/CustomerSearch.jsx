import React, { useState } from "react";
import axios from "axios";

export default function CustomerSearch() {
  return (
    <div className="flex gap-2 mb-6">
      <input
        className=" block w-[20rem] rounded-md border px-3 py-1.5 leading-6 outline-none text-sm focus:ring"
        placeholder="search"
      />
      <button>
        <img
          src="https://www.svgrepo.com/show/513607/search.svg"
          alt="searchlogo"
          className="w-7"
        />
      </button>
    </div>
  );
}
