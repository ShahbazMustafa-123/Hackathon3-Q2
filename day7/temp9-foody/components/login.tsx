"use client";

import { SignedIn, SignedOut, SignInButton , UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-slate-900 text-white">
      {/* Left Section - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center">
        <div className="flex flex-col items-center justify-center w-full h-full p-10 bg-black bg-opacity-70">
          <h1 className="text-5xl font-bold text-orange-500">Welcome to FAST BITE</h1>
          <p className="mt-4 text-lg text-center text-white">
            Savor the flavor of fast, fresh, and delicious food!
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:px-20 bg-black shadow-md">
        <SignedIn>
          <div className="text-center">
            <UserButton />
            <h1 className="text-3xl font-bold mt-4 text-orange-500">
              Welcome Back!
            </h1>
            <p className="mt-4 text-lg text-white">
              Use coupon <span className="font-bold text-orange-500">FAST50</span> to get a $50 discount on your next order!
            </p>
          </div>
        </SignedIn>

        <SignedOut>
          <h1 className="text-4xl font-bold mb-6 text-center text-orange-500">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-orange-500 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-orange-500 font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
                />
                <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-white">Remember Me</span>
              </label>
              <Link href="#" className="text-sm text-orange-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
          <div className="text-center bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 cursor-pointer">
            <SignInButton mode="modal" />
          </div>
          <p className="text-center mt-4 text-gray-400">
            New here?{" "}
            <Link href="#" className="text-orange-500 font-bold hover:underline">
              Create an account
            </Link>
          </p>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;