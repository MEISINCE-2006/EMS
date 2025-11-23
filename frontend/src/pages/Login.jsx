import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shake, setShake] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: email.trim(),
        password: password.trim(),
      });

      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);

        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("⚠️ Server error, try again later");
      }
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-4 relative overflow-hidden">
   
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`relative z-10 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          EMPLOYEE MANAGEMENT SYSTEM
        </h2>

        <div
          className={`border border-gray-700 shadow-2xl p-8 w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-800/80 backdrop-blur-sm rounded-2xl transform transition-all duration-500 hover:scale-105 ${
            shake ? "animate-shake" : ""
          }`}
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-400 mt-2">Sign in to your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg transform animate-bounce">
              <p className="text-red-300 text-center flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 
                             focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none transition-all duration-300
                             group-hover:border-teal-400 backdrop-blur-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="group relative">
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 
                             focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none transition-all duration-300
                             group-hover:border-purple-400 backdrop-blur-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3-11-7a10.05 10.05 0 013.167-4.816M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3l18 18"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-300 text-sm">
              <label className="inline-flex items-center group cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-5 h-5 bg-gray-600 rounded border border-gray-500 group-hover:border-teal-400 transition-colors flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-teal-400 opacity-0 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <span className="ml-2 group-hover:text-teal-300 transition-colors">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                className="text-teal-400 hover:text-teal-300 transition-colors duration-300 hover:underline transform hover:scale-105"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password} 
              className={`w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-500 hover:to-purple-500 
                         text-white py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:scale-105 hover:shadow-2xl font-semibold text-lg relative overflow-hidden group`}
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
