"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/DashboardHeader";
import APIData from "@/components/APIData";
import LogoutButton from "@/components/LogoutButton";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
      }
    });
    return unsubscribe;
  }, [router]);

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl p-8">
        <DashboardHeader user={user} />
        <LogoutButton />
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-inner">
          <h2 className="text-lg font-semibold text-gray-800">
            Protected API Data
          </h2>
          <APIData />
        </div>
      </div>
    </div>
  );
}
