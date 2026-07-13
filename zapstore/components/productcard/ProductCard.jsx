"use client";

import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCurrentUser } from "@/utils/authStorage";
import { login } from "@/redux/slices/authSlice";

export default function ProductCard({ product }) {

  const { currentUser } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();


  const handleWishlist = () => {

    if (!currentUser) {
      alert("Please login first");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) => {

      if (user.email === currentUser.email) {

        const wishlist = user.wishlist || [];

        const exists = wishlist.find(
          (item) => item._id === product._id
        );

        if (!exists) {
          wishlist.push(product);
          alert("Added to Wishlist");
        }
        else {
          alert("Product already wishlisted")
        }

        return {
          ...user,
          wishlist,
        };
      }

      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update currentUser also
    const updatedCurrentUser = updatedUsers.find(
      (u) => u.email === currentUser.email
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedCurrentUser)
    );
    dispatch(login(updatedCurrentUser));


  };

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
          (item) => item._id === product._id
        );

        if (exists) {
          exists.quantity += 1;
          alert("Increasecd one quantity");
        } else {
          cart.push({
            ...product,
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
    dispatch(login(updatedUsers));

    // Update currentUser also
    const updatedCurrentUser = updatedUsers.find(
      (u) => u.email === currentUser.email
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedCurrentUser)
    );
    dispatch(login(updatedCurrentUser));

  };

  return (
    <div>




      <div className="relative group bg-gray-100 rounded-md h-62.5 flex justify-center items-center overflow-hidden">

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded z-10">
          New
        </span>

        <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">

          <button className="bg-white p-2 rounded-full shadow hover:bg-red-600
            transition-transform duration-300 group-hover:scale-105"
            onClick={handleWishlist}
          >
            <Heart size={18} />
          </button>

          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <Eye size={18} />
          </button>

        </div>

        <Link href="/product">
          <Image
            src={product.pImg}
            alt={product.pName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Add to Cart */}
        <button
          className="
            absolute bottom-0 left-0 w-full
            bg-black text-white py-3 text-lg
            translate-y-full
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            
            transition-all
            duration-300
            pointer
            z-20
          "

          onClick={handleCart}
        >
          Add To Cart
        </button>

      </div>

      <div className="mt-4 space-y-2 text-start">

        <h3 className="font-semibold text-base">
          {product.pName}
        </h3>

        <p className="text-red-500 font-semibold">
          ₹{product.pPrice}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="text-gray-500 text-sm ml-1">
            (88)
          </span>
        </div>

      </div>



    </div>
  );
}