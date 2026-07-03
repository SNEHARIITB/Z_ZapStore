"use client";

import React, { useState } from 'react';
import { Menu, X, Search, Heart, ShoppingCart } from "lucide-react";
import Link from 'next/link';


function NavBarComp({isLoggedin}) {


    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 border-b-gray-400 bg-white shadow-md px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
            <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-black-600 hover:text-blue-600">
                ZapStore
            </h1>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
                <Link href="/home" className="hover:text-blue-600">
                Home
                </Link>

                <a href="#" className="hover:text-blue-600">
                Contact
                </a>

                <a href="#" className="hover:text-blue-600">
                About
                </a>

                <Link href="/signup" className="hover:text-blue-600">
                Sign Up
                </Link>
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

                {isLoggedin && (
                    <div className="flex gap-4">
                        <Heart
                            size={25}
                        />
                        <ShoppingCart
                            size={25}
                        />
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
                <a href="/home" className="block">
                Home
                </a>

                <a href="#" className="block">
                Products
                </a>

                <a href="#" className="block">
                Categories
                </a>

                <a href="#" className="block">
                Contact
                </a>

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
