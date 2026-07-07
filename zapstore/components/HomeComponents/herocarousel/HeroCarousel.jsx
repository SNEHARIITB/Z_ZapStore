"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import iphoneimg from "@/assets/herocarousel/iphone.png";
import googleimg from "@/assets/herocarousel/pixel.png";
import nothingimg from "@/assets/herocarousel/nothing.png";
import oneplusimg from "@/assets/herocarousel/oneplus.png";
import samsungimg from "@/assets/herocarousel/samsung.png"

const slides = [
  {
    id: 1,
    brand: "Apple",
    series: "iPhone 14 Series",
    title: "Up to 10% off Voucher",
    image: iphoneimg,
  },
  {
    id: 2,
    brand: "Samsung",
    series: "Galaxy S24 Ultra",
    title: "Save up to 15%",
    image: samsungimg,
  },
  {
    id: 3,
    brand: "Google",
    series: "Pixel 9 Pro",
    title: "Flat ₹5000 Off",
    image: googleimg,
  },
  {
    id: 4,
    brand: "OnePlus",
    series: "OnePlus 13",
    title: "Exchange Bonus Available",
    image: oneplusimg,
  },
  {
    id: 5,
    brand: "Nothing",
    series: "Phone (3)",
    title: "Launch Offer",
    image: nothingimg,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-lg bg-black">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10"
          >
            {/* Left */}
            <div className="text-white space-y-6 max-w-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl"></span>
                <span>{slide.series}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {slide.title}
              </h1>

              <button className="border-b border-white pb-1 flex items-center gap-2 hover:text-gray-300">
                Shop Now →
              </button>
            </div>

            {/* Right */}
            <div className="mt-10 md:mt-0">
              <Image
                src={slide.image}
                alt={slide.series}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-red-500 ring-2 ring-white"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}