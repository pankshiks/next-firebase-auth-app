"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";
import AuthMessage from "@/components/AuthMessage";
import { VALIDATION_MESSAGES } from "@/lib/constants";

export default function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage(VALIDATION_MESSAGES.invalidEmail);
      return;
    }
    if (password.length < 6) {
      setMessage(VALIDATION_MESSAGES.shortPassword);
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setMessage(VALIDATION_MESSAGES.invalidCredentionals);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <AuthMessage message={message} />
      <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <SubmitButton loading={loading} text="Login" />
    </form>
  );
}
