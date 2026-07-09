"use client";

import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/redux/slices/authSlice";

export default function AuthForm({ type = "login" }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const dispatch = useAppDispatch();

    const router = useRouter();

    const isLogin = type === "login";

    const signupUser = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const alreadyExists = users.find(
            (user) => user.email === formData.email
        );

        if (alreadyExists) {
            alert("Email already Exists")
            return;
        }

        users.push(formData);

        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("currentUser", JSON.stringify(formData))

        dispatch(login(formData));

        alert("Account Created Sucessfully")

        router.replace("/home");
    }

    const loginUser = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const currentuser = users.find(
            (user) => 
                user.email === formData.email &&
                user.password === formData.password
        );

        if(!currentuser){
            alert("Invalid Credentials");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(currentuser));

        dispatch(login(currentuser));

        alert("Login Successful");

        router.replace("/home");

    }

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            loginUser();
        }
        else {
            signupUser();
        }
    };


    return (
        <div className="w-full max-w-md px-5 md:px-0">

            <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {isLogin ? "Login to Exclusive" : "Create an Account"}
            </h1>

            <p className="text-gray-500 mb-6">
                Enter your details below.
            </p>

            <form className="space-y-5"
                onSubmit={handleSubmit}

            >

                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-500"
                        value={formData.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                )}

                <input
                    type="email"
                    placeholder="Email or Phone Number"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-500"
                    value={formData.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-500"
                    value={formData.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                />


                {isLogin && (
                    <div className="flex justify-between items-center ">
                        <button
                            className="px-5 py-3 sm:px-10 sm:py-3 rounded-lg bg-red-500 font-semibold text-white hover:bg-red-600 transition"
                            type="submit"
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
                        type="submit"
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