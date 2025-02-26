"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { API_ENDPOINTS } from "@/lib/constants";

export default function APIData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    auth.currentUser
      .getIdToken()
      .then((token) => {
        fetch(API_ENDPOINTS.protectedData, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-4 p-4 bg-gray-200 rounded-lg text-gray-800 text-sm overflow-x-auto">
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}
