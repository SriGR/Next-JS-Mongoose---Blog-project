"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const blogClick = () => {
    router.push("/blog");
  };
  return (
    <div className="w-full bg-white h-[calc(100vh-80px)]">
      <div className="w-full h-full p-3">
        <div className="w-full h-[calc(100%-40px)] flex flex-col items-center justify-center gap-3">
          <span className="text-4xl font-bold text-violet-800">Welcome to</span>
          <span className="text-4xl font-bold text-violet-800">
            My Favourite Bikes Blog
          </span>
        </div>

        <div className="w-full h-10 flex justify-end items-end">
          <span
            className="w-auto px-6 py-2 bg-violet-400 text-white cursor-pointer"
            onClick={blogClick}
          >
            Next Page
          </span>
        </div>
      </div>
    </div>
  );
}
