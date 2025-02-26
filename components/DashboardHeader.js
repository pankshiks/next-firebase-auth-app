"use client";

import { DEFAULT_AVATAR_URL } from "@/lib/constants";

export default function DashboardHeader({ user }) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={user.photoURL || DEFAULT_AVATAR_URL}
        alt="User Avatar"
        className="w-16 h-16 rounded-full border-2 border-blue-500"
      />
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {user.displayName || user.email}
        </h1>
        <p className="text-gray-600">Your Dashboard</p>
      </div>
    </div>
  );
}
