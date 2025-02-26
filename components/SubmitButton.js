"use client";

export default function SubmitButton({ loading, text }) {
  return (
    <button
      type="submit"
      className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
