import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAuth from "./AdminDataAuth";

const Auth = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      setError("Email is required to send OTP!");
      return;
    }

    try {
      setError(""); // Clear previous errors
      await AdminAuth.sendOtp(email);
      setOtpSent(true); // Show success message
    } catch (err) {
      setError(err.message || "Failed to send OTP.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password || !otp) {
      setError("All fields are required!");
      return;
    }
  
    try {
      setError(""); // Clear previous errors
  
      // Verify Password and OTP
      const isPasswordValid = await AdminAuth.checkPassword(email, password);
      const isOtpValid = await AdminAuth.verifyOtp(email, otp);
  
      // If both validations pass, login successful
      if (isPasswordValid && isOtpValid) {
        setIsAuthenticated(true);
        navigate("/admin");
      } else {
        setError("Invalid email, password, or OTP!");
      }
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pr-24"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-1 text-sm bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* OTP Section */}
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              required
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {otpSent && <p className="text-green-500 text-sm mt-2">OTP sent successfully!</p>}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
