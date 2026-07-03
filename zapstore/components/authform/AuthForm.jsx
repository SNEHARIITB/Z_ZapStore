"use client";

import Link from "next/link";

export default function AuthForm({ type = "login" }) {
    const isLogin = type === "login";


    return (
        <div className="w-full max-w-md">

            <h1 className="text-3xl font-bold mb-2">
                {isLogin ? "Login to Exclusive" : "Create an Account"}
            </h1>

            <p className="text-gray-500 mb-6">
                Enter your details below.
            </p>

            <form className="space-y-5">

                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-500"
                    />
                )}

                <input
                    type="email"
                    placeholder="Email or Phone Number"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-500"
                />


                {isLogin && (
                    <div className="flex justify-between align-middle items-center-safe">
                        <button
                            className="px-10 py-3 rounded-lg bg-red-500 font-semibold text-white hover:bg-red-600 transition"
                        >
                            {isLogin ? "Log In" : "Create Account"}
                        </button>
                        <Link
                            href="/forgot-password"
                            className="text-sm text-red-500 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                )}

                {!isLogin && (
                    <button
                        className="w-full rounded-lg bg-red-500 py-3 font-semibold text-white hover:bg-red-600 transition"
                    >
                        Create Account
                    </button>
                )}

                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 hover:bg-gray-50 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="h-5"
                    />
                    Continue with Google
                </button>


                <p className="text-center text-sm">
                    {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    <Link
                        href={isLogin ? "/signup" : "/login"}
                        className="ml-2 font-semibold text-red-500 hover:underline"
                    >
                        {isLogin ? "Sign Up" : "Log In"}
                    </Link>
                </p>

            </form>
        </div>
    );
}