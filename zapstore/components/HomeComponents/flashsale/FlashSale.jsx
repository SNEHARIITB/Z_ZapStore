"use client";

import ProductCard from "@/components/productcard/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function FlashSale({ products = [] }) {
  const [countdown, setCountdown] = useState({
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      let items = 4;

      if (window.innerWidth >= 1024) {
        items = 4;
      } else if (window.innerWidth >= 768) {
        items = 3;
      } else if (window.innerWidth >= 640) {
        items = 2;
      } else {
        items = 1;
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

  useEffect(() => {
    const targetTime = Date.now() + 4 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const difference = targetTime - Date.now();

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-5 sm:px-8 lg:px-20 py-10">

      <div className="flex justify-between items-center mb-8">

        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">

          <div>
            <p className="text-red-500 font-semibold">
              Today's
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Flash Sales
            </h2>
          </div>

          <div className="flex items-end gap-3">

            <div>
              <p className="text-xs">Days</p>
              <h2 className="text-2xl font-bold">
                {String(countdown.days).padStart(2, "0")}
              </h2>
            </div>

            <span className="text-red-500 text-3xl">:</span>

            <div>
              <p className="text-xs">Hours</p>
              <h2 className="text-2xl font-bold">
                {String(countdown.hours).padStart(2, "0")}
              </h2>
            </div>

            <span className="text-red-500 text-3xl">:</span>

            <div>
              <p className="text-xs">Minutes</p>
              <h2 className="text-2xl font-bold">
                {String(countdown.minutes).padStart(2, "0")}
              </h2>
            </div>

            <span className="text-red-500 text-3xl">:</span>

            <div>
              <p className="text-xs">Seconds</p>
              <h2 className="text-2xl font-bold">
                {String(countdown.seconds).padStart(2, "0")}
              </h2>
            </div>

          </div>

        </div>

        <div className="flex gap-3">

          <button
            onClick={prevPage}
            disabled={page === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              page === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextPage}
            disabled={page === totalPages - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              page === totalPages - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ChevronRight />
          </button>

        </div>

      </div>

      {products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          Loading...
        </div>
      )}

      <div className="flex justify-center mt-10">
        <button className="bg-red-500 text-white px-10 py-3 rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </div>

    </section>
  );
}