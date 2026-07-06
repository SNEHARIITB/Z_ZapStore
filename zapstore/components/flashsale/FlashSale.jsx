"use client";

import ProductCard from "@/components/productcard/ProductCard.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FlashSale({ products }) {


    const sliderRef = useRef(null);

    const [countdown, setCountdown] = useState({
        days: 4,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -320,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 320,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const targetTime = Date.now() + 4 * 24 * 60 * 60 * 1000;

        const interval = setInterval(() => {
            const difference = targetTime - Date.now();

            if (difference <= 0) {
                clearInterval(interval)
                setCountdown({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                })
                return;
            }
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );
            const minutes = Math.floor(
                (difference / (1000 * 60)) % 60
            );
            const seconds = Math.floor(
                (difference / 1000) % 60
            );

            setCountdown({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);

        return () => clearInterval(interval);

    }, [])

return (
    <div className="px-10 lg:px-20 py-10 text-center space-y-10">

        <div>
            <div className="flex justify-between items-center mb-8">

                <div className="flex gap-30">
                    <div>
                        <p className="text-red-500 text-start font-semibold">Today's</p>

                        <h2 className="text-3xl font-bold mt-2">
                            Flash Sales
                        </h2>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div>
                            <h4 className="text-xs">Days</h4>
                            <h1 className="text-2xl font-bold mt-2">
                                {String(countdown.days).padStart(2, "0")}
                            </h1>
                        </div>
                        <h1 className="text-red-500 text-3xl font-bold">:</h1>
                        <div>
                            <p className="text-xs">Hours</p>
                            <h1 className="text-2xl font-bold mt-2">
                                {String(countdown.hours).padStart(2, "0")}
                            </h1>
                        </div>
                        <h1 className="text-red-500 text-3xl font-bold">:</h1>
                        <div>
                            <p className="text-xs">Minutes</p>
                            <h1 className="text-2xl font-bold mt-2">
                                {String(countdown.minutes).padStart(2, "0")}
                            </h1>
                        </div>
                        <h1 className="text-red-500 text-3xl font-bold">:</h1>
                        <div>
                            <p className="text-xs">Seconds</p>
                            <h1 className="text-2xl font-bold mt-2">
                                {String(countdown.seconds).padStart(2, "0")}
                            </h1>
                        </div>
                    </div>

                </div>

                <div className="flex gap-3">
                    <button
                        onClick={scrollLeft}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                        <ChevronRight />
                    </button>
                </div>

            </div>

            <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none"
            >
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="min-w-67.5"
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

        </div>



        <div className="mx-30 items-center">
            <button className="bg-red-500 text-white text-sm px-17 py-3 rounded">
                View All Products
            </button>
        </div>

    </div>
);
}