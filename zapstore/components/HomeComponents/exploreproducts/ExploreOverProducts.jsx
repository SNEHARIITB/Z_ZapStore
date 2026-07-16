"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/productcard/ProductCard";

export default function ExploreOurProducts({ products = [] }) {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const updateItemsPerPage = () => {
      let items = 8;

      if (window.innerWidth >= 1024) {
        items = 8; // 4 × 2
      } else if (window.innerWidth >= 768) {
        items = 6; // 3 × 2
      } else if (window.innerWidth >= 640) {
        items = 4; // 2 × 2
      } else {
        items = 2; // 1 × 2
      }

      setItemsPerPage(items);
      setPage(0);
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const visibleProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <section className="px-5 sm:px-8 lg:px-20 py-10">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8 ">

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 sm:w-5 h-10 bg-red-500 rounded"></div>
            <p className="text-red-500 font-semibold">
              Our Products
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Explore Our Products
          </h2>
        </div>

        <div className="flex gap-3">

          <button
            onClick={prevPage}
            disabled={page === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition
              ${page === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextPage}
            disabled={page === totalPages - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition
              ${page === totalPages - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>

      {/* Products */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      ) : (
        <div className="py-20 text-center text-gray-500">
          Loading...
        </div>
      )}

      {/* View All */}
      <div className="flex justify-center mt-12">

        <button className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-3 rounded-md">
          View All Products
        </button>

      </div>

    </section>
  );
}