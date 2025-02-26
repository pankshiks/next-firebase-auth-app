"use client";

export default function Loader({ size = "6" }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`w-${size} h-${size} border-4 border-blue-500 border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
}
