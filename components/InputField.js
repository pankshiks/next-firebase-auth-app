"use client";

export default function InputField({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 border rounded-lg focus:outline-blue-500"
      value={value}
      onChange={onChange}
      required
    />
  );
}
