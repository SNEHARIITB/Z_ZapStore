"use client";

import React, { useEffect, useState } from 'react';
import { Menu, X, Search, Heart, ShoppingCart, User, Divide } from "lucide-react";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { login, logout } from '@/redux/slices/authSlice';
import { useRouter } from "next/navigation";




function NavBarComp({ currentUser }) {

    const router = useRouter();

    const dispatch = useAppDispatch();
    // const { currentUser } = useAppSelector((state) => state.auth);


    const wishlistCount = currentUser?.wishlist?.length || 0;
    const cartCount = currentUser?.cart?.length || 0;


    const [isOpen, setIsOpen] = useState(false);
    const [accBtn, setAccBtn] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");

        dispatch(logout());

        router.replace("/login");
    };


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"));

        if (user) {
            dispatch(login(user));
        }

    }, [dispatch]);


    return (
        <nav className="sticky top-0 border-b-gray-400 bg-white shadow-md px-5 md:px-10 lg:px-20 z-50">
            <div className="">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <h1 className="text-xl lg:text-2xl font-bold text-black-600 hover:text-blue-600">
                        {currentUser ? currentUser?.name : "ZapStore"}
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-6 lg:gap-8 md:flex md:mx-5">
                        <Link href="/home" className="hover:text-blue-600">
                            Home
                        </Link>

                        <Link href="/contact" className="hover:text-blue-600">
                            Contact
                        </Link>

                        <Link href="/404error" className="hover:text-blue-600">
                            About
                        </Link>


                        {currentUser ? (
                            <button
                                onClick={handleLogout}
                                className="hover:text-red-600"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/signup"
                                className="hover:text-blue-600"
                            >
                                Sign Up
                            </Link>
                        )}
                    </div>

                    {/* Search */}
                    <div className="hidden items-center md:flex gap-4">
                        <div className="relative">
                            <Search
                                size={18}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="What are you looking for ?"
                                className="rounded-lg border lg:w-52 bg-gray-100 border-gray-300 text-xs py-2 pl-4 pr-7 focus:border-blue-500 focus:outline-none"
                            />
                        </div>

                        {currentUser && (
                            <div className="flex gap-3">

                                <Link href="/wishlist" >
                                    <div className="p-2 relative rounded-full hover:bg-red-500 hover:text-white transition duration-200">
                                        <Heart
                                            size={22}
                                        />
                                        {wishlistCount > 0 &&
                                            <span
                                                className="
                                                absolute
                                                -top-1.5
                                                -right-2
                                                bg-red-500
                                                text-white
                                                text-xs
                                                w-5
                                                h-5
                                                rounded-full
                                                flex
                                                items-center
                                                justify-center
                                                hover:bg-black
                                                hover:text-white 
                                                transition 
                                                duration-200
                                            "
                                            >
                                                {wishlistCount}
                                            </span>
                                        }
                                    </div>
                                </Link>

                                <Link href="/cart" >
                                    <div className="p-2 rounded-full relative hover:bg-red-500 hover:text-white transition duration-200">
                                        <ShoppingCart
                                            size={22}
                                        />
                                        {cartCount > 0 &&
                                            <span
                                                className="
                                                absolute
                                                -top-1.5
                                                -right-2
                                                bg-red-500
                                                text-white
                                                text-xs
                                                w-5
                                                h-5
                                                rounded-full
                                                flex
                                                items-center
                                                justify-center
                                                hover:bg-black
                                                hover:text-white 
                                                transition 
                                                duration-200
                                            "
                                            >
                                                {cartCount}
                                            </span>
                                        }
                                    </div>

                                </Link>

                                <div className="relative">
                                    <button
                                        onClick={() => setAccBtn(!accBtn)}
                                        className="p-2 rounded-full hover:bg-red-500 hover:text-white transition duration-200"
                                    >
                                        <User size={22} />
                                    </button>

                                    {accBtn && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                                            <Link
                                                href="/account"
                                                className="block px-4 py-3 hover:bg-gray-100"
                                            >
                                                My Account
                                            </Link>

                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-3 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </div>
                        )}

                    </div>



                    {/* Mobile Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="space-y-4 border-t py-4 md:hidden">
                        <Link href="/home" className="block">
                            Home
                        </Link>

                        <Link href="/contact" className="block">
                            Contact
                        </Link>

                        <Link href="/404error" className="block">
                            About
                        </Link>

                        <Link href="/signup" className="block">
                            Sign Up
                        </Link>

                        <div className="relative">
                            <Search
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="What are you looking ?"
                                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBarComp;
