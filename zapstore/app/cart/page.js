"use client";

import Footer from '@/components/footer/Footer'
import NavBarComp from '@/components/navbar/NavBarComp'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import { getProducts } from '@/redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { login } from "@/redux/slices/authSlice";
import { IoSendOutline } from 'react-icons/io5';
import { Trash2 } from 'lucide-react';

export default function page() {

    const { currentUser } = useAppSelector((state) => state.auth);


    const cartedProducts = currentUser?.cart || [];

    const dispatch = useAppDispatch();

    // const { products, loading } = useAppSelector(
    //     (state) => {
    //         return state.product
    //     }
    // );
    // useEffect(() => {
    //     console.log(cartedProducts);
    // }, [cartedProducts, cartedProducts.quantity]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    const handleQuantityChange = (id, quantity) => {

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = users.map((user) => {

            if (user.email === currentUser.email) {

                const updatedCart = user.cart.map((item) =>
                    item.id === id
                        ? { ...item, quantity }
                        : item
                );

                return {
                    ...user,
                    cart: updatedCart,
                };
            }

            return user;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        const updatedCurrentUser = updatedUsers.find(
            (u) => u.email === currentUser.email
        );

        localStorage.setItem(
            "currentUser",
            JSON.stringify(updatedCurrentUser)
        );

        dispatch(login(updatedCurrentUser));
    }

    const subtotal = cartedProducts.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    const handleDelete = (id) => {

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = users.map((user) => {

            if (user.email === currentUser.email) {

                const updatedCart = (user.cart || []).filter(
                    (item) => item.id !== id
                );

                return {
                    ...user,
                    cart: updatedCart,
                };
            }

            return user;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        const updatedCurrentUser = updatedUsers.find(
            (u) => u.email === currentUser.email
        );

        localStorage.setItem(
            "currentUser",
            JSON.stringify(updatedCurrentUser)
        );

        dispatch(login(updatedCurrentUser));
    };

    const total = subtotal;
    return (
        <div>
            <Saleoffer />

            <NavBarComp currentUser={currentUser} />

            <div className="px-10 lg:px-20 py-10">
                Home / Cart
            </div>

            <div className="px-5 lg:px-20 py-10">

                {/* Cart Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-separate border-spacing-y-6 min-w-175">
                        <thead>
                            <tr className="bg-white shadow-md">
                                <th className="text-left px-8 py-6 font-medium">Product</th>
                                <th className="text-left px-8 py-6 font-medium">Price</th>
                                <th className="text-left px-8 py-6 font-medium">Quantity</th>
                                <th className="text-right px-8 py-6 font-medium">Subtotal</th>
                                <th className="text-center px-8 py-6 font-medium">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartedProducts?.map((product) => (
                                <tr key={product.id} className="bg-white shadow-md">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-16 h-16 object-contain"
                                            />

                                            <span className="font-medium whitespace-nowrap">
                                                {product.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-8 py-6">${product.price}</td>

                                    <td className="px-8 py-6">
                                        <select

                                            className="border rounded-md px-3 py-2"
                                            value={product.quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(product.id, Number(e.target.value))
                                            }
                                        >
                                            {[...Array(10)].map((_, i) => (
                                                <option key={i}
                                                    value={i + 1}
                                                >{String(i + 1).padStart(2, "0")}</option>
                                            ))}
                                        </select>
                                    </td>

                                    <td className="px-8 py-6 text-right">
                                        ${(product.price * (product.quantity || 1)).toFixed(2)}
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-red-500 hover:text-red-700 text-2xl font-bold"
                                        >
                                            <Trash2 />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
                    <button className="border px-8 py-3 rounded hover:bg-gray-100">
                        Return To Shop
                    </button>

                    <button className="border px-8 py-3 rounded hover:bg-gray-100"
                    // onClick={handleTotal}
                    >
                        Update Cart
                    </button>
                </div>

                {/* Coupon + Cart Total */}
                <div className="mt-16 flex flex-col lg:flex-row justify-between gap-12">

                    {/* Coupon */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:h-13 w-full lg:w-auto">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="border rounded-md px-5 py-3 flex-1 sm:w-72"
                        />

                        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded">
                            Apply Coupon
                        </button>
                    </div>

                    {/* Cart Total */}
                    <div className="border-2 rounded-md p-6 w-full lg:w-105">
                        <h3 className="text-xl font-semibold mb-6">
                            Cart Total
                        </h3>

                        <div className="flex justify-between border-b py-4">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>

                        <div className="flex justify-between border-b py-4">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <div className="flex justify-between py-4 font-semibold text-lg">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                        <Link href="/checkout">
                            <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded">
                                Proceed To Checkout
                            </button>
                        </Link>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
