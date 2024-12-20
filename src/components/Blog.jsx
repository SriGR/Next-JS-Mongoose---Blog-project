"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function page() {
  const [bikeData, setBikeData] = useState([]);
  const SearchRef = useRef();

  const fetchBikes = (query) => {
    fetch(`http://localhost:3000/api/Bikes${query ? `?q=${query}` : ""}`)
      .then((res) => res.json())
      .then(setBikeData)
      .catch(console.error);
  };

  useEffect(() => fetchBikes(), []);

  const handleSearch = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;
    fetchBikes(SearchRef.current.value);
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] p-2">
      <div className="w-full h-full">
        <div className="w-full h-10 flex justify-end items-center gap-2">
          <input
            onKeyDown={handleSearch}
            ref={SearchRef}
            type="text"
            placeholder="Search here"
            className="border-2 border-solid border-violet-300 w-50 h-8 px-2 text-sm font-normal outline-none rounded-md"
          />
          <button
            className="w-auto h-8 px-4 bg-violet-800 text-white outline-none rounded-md border-2 border-solid border-violet-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="w-full h-[calc(100%-40px)] flex justify-start items-start gap-4 flex-wrap overflow-auto mt-2">
          {bikeData &&
            bikeData.map((val, index) => {
              return (
                <Link
                  href={`/Posts/${val._id}`}
                  key={index}
                  className="w-[calc(33.333%-16px)] h-auto flex flex-col justify-between items-start gap-2 overflow-auto border-2 border-solid border-gray-200 rounded-md p-4 cursor-pointer"
                >
                  <span className="text-left w-full text-2xl font-bold">
                    {val.brand}
                  </span>
                  <span className="text-left w-full text-xl font-bold text-violet-500">
                    {val.name}
                  </span>
                  <span className="text-left w-full text-lg font-medium">
                    {val.ShortDescription}
                  </span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
