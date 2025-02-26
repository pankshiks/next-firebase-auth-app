"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-6 w-full py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}
