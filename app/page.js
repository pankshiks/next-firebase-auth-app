import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
        Welcome to Next.js with Firebase
      </h1>
      <p className="text-lg md:text-xl text-white mb-10 text-center max-w-2xl">
        Experience seamless authentication and a beautifully crafted interface powered by Next.js and Firebase.
      </p>
      <Link
        href="/login"
        className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
}
