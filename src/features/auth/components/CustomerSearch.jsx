import React from "react";

export default function CustomerSearch() {
  return (
    <div className="flex gap-3">
      <input
        className=" block w-full rounded-md border px-3 py-1.5 leading-6 outline-none text-sm focus:ring"
        placeholder="search"
      />
      <button>
        <img
          src="https://www.svgrepo.com/show/513607/search.svg"
          alt="searchlogo"
          className="w-10"
        />
      </button>
    </div>
  );
}
