"use client";

import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product }) {

  return (
    <div>
      
      <Link href="/product">


      <div className="relative group bg-gray-100 rounded-md h-62.5 flex justify-center items-center overflow-hidden">

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded z-10">
          New
        </span>

        <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">

          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <Heart size={18} />
          </button>

          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <Eye size={18} />
          </button>

        </div>

        <Image
          src={product.pImg}
          alt={product.pName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

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
            z-20
          "
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

      </Link>

    </div>
  );
}