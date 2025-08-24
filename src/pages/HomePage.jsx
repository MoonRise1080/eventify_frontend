
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Eventify!
      </h1>
      <p className="text-gray-600 text-lg">You are successfully logged in.</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Log Out
      </button>
    </div>
  );
}