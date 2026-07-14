"use client";

import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import ProductCard from "@/components/productcard/ProductCard";
import { Heart, Truck, RotateCcw, Minus, Plus, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { getProducts } from "@/redux/slices/productSlice";
import { login } from "@/redux/slices/authSlice";


export default function ProductDetails({ id = 1 }) {

    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);

    const images = [
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
        "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500",
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500",
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(2);



    const { products, loading } = useAppSelector(
        (state) => state.product
    );


    const selectedProduct = useMemo(() => {
        return products?.find((item) => item.id === Number(id));
    }, [products, id]);




    const relatedProducts = useMemo(() => {
        return products
            .filter((item) => item.id !== Number(id))
            .slice(0, 4);
    }, [products, id]);




    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts());
        }
    }, [dispatch, products.length]);

    const handleCart = () => {
        if (!currentUser) {
            alert("Please login first");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = users.map((user) => {
            if (user.email === currentUser.email) {
                const cart = user.cart || [];

                const exists = cart.find(
                    (item) => item.id === selectedProduct.id
                );

                if (exists) {
                    exists.quantity += 1;
                    alert("Quantity Increased");
                } else {
                    cart.push({
                        ...selectedProduct,
                        quantity: 1,
                    });

                    alert("Added to Cart");
                }

                return {
                    ...user,
                    cart,
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


    if (loading || !selectedProduct) {
        return (
            <div className="px-5 lg:px-20 py-10">
                Loading...
            </div>
        );
    }

    return (
        <div className="px-5 lg:px-20 py-10">

            <div>


                <div className="max-w-7xl mx-auto px-5 lg:px-16 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Left Section */}
                        <div className="flex gap-5">

                            {/* Thumbnails */}
                            <div className="hidden lg:flex-col gap-4 ">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-24 h-24 rounded bg-gray-100 cursor-pointer border-2 ${selectedImage === img
                                            ? "border-red-500"
                                            : "border-transparent"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt=""
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="flex-1 bg-gray-100 rounded flex items-center justify-center p-10">
                                <img
                                    src={selectedProduct.image}
                                    alt=""
                                    className="max-h-112.5 object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div>

                            <h2 className="text-3xl font-semibold">
                                {selectedProduct.title}
                            </h2>

                            {/* Rating */}
                            <div className="flex items-center gap-3 mt-3">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill="currentColor"
                                        />
                                    ))}
                                </div>

                                <span className="text-gray-500 text-sm">
                                    {selectedProduct.rating?.rate} ({selectedProduct.rating?.count} Reviews)
                                </span>

                                <span className="text-green-600 text-sm">
                                    In Stock
                                </span>
                            </div>

                            {/* Price */}
                            <h3 className="text-3xl mt-4 font-medium">
                                ${selectedProduct.price}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mt-5 leading-7">
                                {selectedProduct.description}
                            </p>

                            <hr className="my-7" />

                            {/* Colours */}
                            <div className="flex items-center gap-4">
                                <h4 className="font-medium">Colours:</h4>

                                <button className="w-5 h-5 rounded-full bg-sky-400 border-2 border-black"></button>

                                <button className="w-5 h-5 rounded-full bg-red-400"></button>
                            </div>

                            {/* Sizes */}
                            {selectedProduct.category?.includes("clothing") && (
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-7">
                                    <h4 className="font-medium">Size:</h4>

                                    {["XS", "S", "M", "L", "XL"].map((size) => (
                                        <button
                                            key={size}
                                            className={`border rounded px-3 py-1 text-sm ${size === "M"
                                                ? "bg-red-500 text-white border-red-500"
                                                : "hover:border-red-500"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Quantity */}
                            <div className="flex items-center gap-4 mt-8">

                                <div className="flex border rounded overflow-hidden">

                                    <button
                                        onClick={() =>
                                            setQuantity(quantity > 1 ? quantity - 1 : 1)
                                        }
                                        className="w-12 p-1 h-12 flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <Minus size={18} />
                                    </button>

                                    <div className="w-14 h-12 p-1 flex items-center justify-center border-x">
                                        {quantity}
                                    </div>

                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 p-1 bg-red-500 text-white flex items-center justify-center"
                                    >
                                        <Plus size={18} />
                                    </button>


                                </div>
                                <Link href="/cart">
                                    <button
                                        onClick={handleCart}
                                        className="bg-red-500 hover:bg-red-600 text-white px-7 h-12 rounded"
                                    >
                                        Buy Now
                                    </button>
                                </Link>

                                <button className="p-2 border rounded w-12 h-12 flex items-center justify-center">
                                    <Heart size={20} />
                                </button>

                            </div>

                            {/* Delivery */}
                            <div className="border rounded mt-10">

                                <div className="flex gap-4 p-5">
                                    <Truck size={28} />
                                    <div>
                                        <h4 className="font-semibold">
                                            Free Delivery
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Enter your postal code for Delivery Availability
                                        </p>
                                    </div>
                                </div>

                                <hr />

                                <div className="flex gap-4 p-5">
                                    <RotateCcw size={28} />
                                    <div>
                                        <h4 className="font-semibold">
                                            Return Delivery
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Free 30 Days Delivery Returns. Details
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>

            <div>

                <div className="flex items-center gap-3 mb-8">
                    <div className="w-5 h-10 bg-red-500 rounded"></div>

                    <h2 className="text-2xl font-semibold">
                        Related Items
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {relatedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>
            </div>


        </div>
    );
}