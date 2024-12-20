"use client";
import React, { useEffect, useState } from "react";

export default function Posts({ params: paramsPromise }) {
  const [params, setParams] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Unwrap the params promise
    const resolveParams = async () => {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    };
    resolveParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (params?.id) {
      fetch(`http://localhost:3000/api/Post/${params.id}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [params]);

  return (
    <div className="w-full h-[calc(100vh-80px)] p-2">
      <div className="w-full h-full">
        {data && (
          <div className="w-full h-auto flex flex-col justify-start items-start gap-2 overflow-auto border-2 border-solid border-gray-200 rounded-md p-4 cursor-pointer">
            <span className="text-left w-full text-2xl font-bold">
              {data.brand}
            </span>
            <span className="text-left w-full text-xl font-bold text-violet-500">
              {data.name}
            </span>
            <span className="text-left w-full text-lg font-medium">
              {data.description}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
