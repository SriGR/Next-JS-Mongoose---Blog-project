"use client";
import React, { useState } from "react";

export default function Contact() {
  const [inputData, setInputData] = useState({});
  const [message, setMessage] = useState("");
  console.log(inputData, "inputData");

  const handleInputs = (e) => {
    setInputData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const PostContact = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setInputData({});
        setTimeout(() => {
          setMessage("");
        }, 5000);
      });
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] p-2">
      <div className="w-full h-full">
        <form
          onSubmit={PostContact}
          className=" w-full h-full flex flex-col gap-3 items-center justify-center"
        >
          {message && (
            <span className="w-auto px-20 py-2 bg-green-800 border-2 border-solid border-green-300 text-white rounded-md mb-10">
              {message}
            </span>
          )}
          <div className="w-auto h-10 flex justify-start items-center gap-4">
            <label className="w-[100px] font-xl font-medium text-black">
              Name :
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInputs}
              value={inputData.name ?? ""}
              className="w-[300px] h-full border-2 border-solid border-violet-300 rounded-md px-2 py-1 outline-none"
            />
          </div>

          <div className="w-auto h-10 flex justify-start items-center gap-4">
            <label className="w-[100px] font-xl font-medium text-black">
              Mail :
            </label>
            <input
              type="text"
              name="mail"
              onChange={handleInputs}
              value={inputData.mail ?? ""}
              className="w-[300px] h-full border-2 border-solid border-violet-300 rounded-md px-2 py-1 outline-none"
            />
          </div>

          <div className="w-auto h-10 flex justify-start items-center gap-4">
            <label className="w-[100px] font-xl font-medium text-black">
              Description :
            </label>
            <textarea
              type="text"
              name="description"
              onChange={handleInputs}
              value={inputData.description ?? ""}
              className="w-[300px] h-full border-2 border-solid border-violet-300 rounded-md px-2 py-1 outline-none"
            />
          </div>

          <button
            className="w-[418px] h-10 px-4 mt-2 cursor-pointer bg-violet-800 text-white outline-none rounded-md border-2 border-solid border-violet-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
