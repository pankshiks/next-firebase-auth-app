"use client";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { VALIDATION_MESSAGES } from "@/lib/constants";

export default function SocialLogin({ setLoading, setMessage, isLogin = true }) {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setMessage("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      setMessage(VALIDATION_MESSAGES.expection);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full p-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300 disabled:opacity-50"
    >
      {isLogin ? "Login with Google" : "Sign up with Google"}
    </button>
  );
}
