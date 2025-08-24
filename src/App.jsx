import React, { useState } from "react";
import LoginPage from "../src/pages/Loginpage.jsx";
import SignupPage from "../src/pages/SignupPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    universityEmail: "",
    universityName: "",
    role: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    if (
      formData.email === "john@university.edu" &&
      formData.password === "password123"
    ) {
      setCurrentPage("home");
      setMessage(null);
    } else if (
      formData.email === "sarah@university.edu" &&
      formData.password === "admin123"
    ) {
      setCurrentPage("home");
      setMessage(null);
    } else {
      setMessage({
        type: "error",
        text: "Invalid email or password. Please try again.",
      });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }

    // Simple mock signup check
    setMessage({
      type: "success",
      text: "Account created successfully! Please log in.",
    });
    setFormData({
      email: "",
      password: "",
      fullName: "",
      universityEmail: "",
      universityName: "",
      role: "",
      confirmPassword: "",
    });
    setCurrentPage("login");
  };

  // A simple Home page component for demonstration
  const HomePage = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Eventify!
      </h1>
      <p className="text-gray-600 text-lg">You are successfully logged in.</p>
      <button
        onClick={() => {
          setCurrentPage("login");
          setMessage(null);
          setFormData({
            email: "",
            password: "",
            fullName: "",
            universityEmail: "",
            universityName: "",
            role: "",
            confirmPassword: "",
          });
        }}
        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Log Out
      </button>
    </div>
  );

  // Conditional rendering based on currentPage state
  let pageComponent;
  switch (currentPage) {
    case "login":
      pageComponent = (
        <LoginPage
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleLogin}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          setCurrentPage={setCurrentPage}
          message={message}
        />
      );
      break;
    case "signup":
      pageComponent = (
        <SignupPage
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSignup}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          setCurrentPage={setCurrentPage}
          message={message}
        />
      );
      break;
    case "home":
      pageComponent = <HomePage />;
      break;
    default:
      pageComponent = (
        <div className="min-h-screen flex items-center justify-center">
          <p>Page Not Found</p>
        </div>
      );
  }

  return pageComponent;
}
