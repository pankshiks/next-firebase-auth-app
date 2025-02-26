"use client";

export default function AuthMessage({ message }) {
  if (!message) return null;

  return (
    <div className="p-2 text-center border rounded-lg text-red-500 border-red-500">
      {message}
    </div>
  );
}
