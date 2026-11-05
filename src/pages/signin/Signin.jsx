


import { useState } from "react";
import { Link } from "react-router";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);


  }



  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-indigo-500/30">
            S
          </div>
          <h1 className="text-3xl font-bold text-white mt-4">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">
            Sign in to continue to your account
          </p>
        </div>

        {/* Sign In Card */}
        <div className="bg-[#151B2B] border border-gray-800 rounded-2xl p-8 shadow-2xl">

          <form className="space-y-5"   onSubmit={handlesubmit}> 

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-[#0B0F19] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                
                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <a href="/forgot-password" className="text-sm text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full bg-[#0B0F19] border border-gray-700 rounded-xl px-4 py-3 pr-16 text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-indigo-500"
              />
              <label htmlFor="remember" className="text-sm text-gray-400">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
            >
              Sign In
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-gray-700 flex-1"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-[#0B0F19] border border-gray-700 hover:border-gray-500 text-white py-3 rounded-xl transition duration-300"
          >
            <span className="font-bold text-lg">G</span>
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-gray-400 text-sm mt-7">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-400 font-semibold hover:text-indigo-300">
              Sign Up
            </Link>
          </p>

        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          © 2026 YourApp. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Signin;
