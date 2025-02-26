"use client";
import AuthMessage from "@/components/AuthMessage";
import RegistrationForm from "@/components/RegistrationForm";
import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
        <AuthMessage message={message} />
        <RegistrationForm />
        <SocialLogin setLoading={setLoading} setMessage={setMessage} isLogin={false}/>
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
