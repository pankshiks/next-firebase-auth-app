"use client";
import { useState } from "react";
import AuthForm from "@/components/AuthForm";
import SocialLogin from "@/components/SocialLogin";
import Loader from "@/components/Loader";
import Link from "next/link";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        
        {/* Show Loader when Loading */}
        {loading && <Loader size="8" />}

        <AuthForm />
        <SocialLogin setLoading={setLoading} setMessage={setMessage} />

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">Register here</Link>
        </p>
      </div>

    </div>
  );
}
