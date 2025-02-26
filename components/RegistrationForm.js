"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";
import AuthMessage from "@/components/AuthMessage";
import { DISALLOWED_DOMAINS, VALIDATION_MESSAGES } from "@/lib/constants";

export default function RegistrationForm() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Simple email regex validation
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!displayName.trim()) {
      setMessage(VALIDATION_MESSAGES.emptyName);
      return;
    }
    if (!validateEmail(email)) {
      setMessage(VALIDATION_MESSAGES.invalidEmail);
      return;
    }
    
    // Check for disallowed email domains
    const emailDomain = email.split("@")[1]?.toLowerCase() || "";
    if (DISALLOWED_DOMAINS.some(domain => emailDomain.includes(domain))) {
      setMessage(VALIDATION_MESSAGES.invalidDomain);
      return;
    }
    
    if (password.length < 6) {
      setMessage(VALIDATION_MESSAGES.shortPassword);
      return;
    }
    if (password !== confirmPassword) {
      setMessage(VALIDATION_MESSAGES.passwordMismatch);
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      router.push("/dashboard");
    } catch (error) {
      if (error.code === VALIDATION_MESSAGES.firebaseDuplicateEmail) {
        setMessage(VALIDATION_MESSAGES.duplicateEmail);
      } else {
        setMessage(VALIDATION_MESSAGES.expection);
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <AuthMessage message={message} />
      <InputField
        type="text"
        placeholder="Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <SubmitButton loading={loading} text="Register" />
    </form>
  );
}
