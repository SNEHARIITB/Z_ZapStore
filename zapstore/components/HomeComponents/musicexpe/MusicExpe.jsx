"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import jbl from "@/assets/heropage/jbl.png";

export default function MusicExpe() {
  const [countdown, setCountdown] = useState({
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = Date.now() + 6 * 24 * 60 * 60 * 1000;

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
  }, []);

  return (
    <section className="px-5 sm:px-8 lg:px-20 py-10">
      <div className="bg-black rounded-lg overflow-hidden">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-10 lg:px-14 py-5 sm:py-10 gap-12">

          {/* Left Content */}
          <div className="text-white max-w-xl">

            <p className="text-[#00FF66] font-semibold mb-4">
              Categories
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Enhance Your
              <br />
              Music Experience
            </h1>

            {/* Countdown */}
            <div className="flex flex-wrap gap-4 mt-5 sm:mt-7 lg:mt-10">

              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-full flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-black">
                  {String(countdown.days).padStart(2, "0")}
                </h2>
                <p className="text-[11px] text-black">Days</p>
              </div>

              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-full flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-black">
                  {String(countdown.hours).padStart(2, "0")}
                </h2>
                <p className="text-[11px] text-black">Hours</p>
              </div>

              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-full flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-black">
                  {String(countdown.minutes).padStart(2, "0")}
                </h2>
                <p className="text-[11px] text-black">Minutes</p>
              </div>

              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-full flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-black">
                  {String(countdown.seconds).padStart(2, "0")}
                </h2>
                <p className="text-[11px] text-black">Seconds</p>
              </div>

            </div>

            <button className="mt-7 lg:mt-10 bg-[#00FF66] hover:bg-green-500 transition text-white font-medium px-10 py-4 rounded-md">
              Buy Now!
            </button>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2">

            {/* Glow */}
            <div className="absolute w-62.5 h-62.5 sm:w-87.5 sm:h-87.5 lg:w-112.5 lg:h-112.5 rounded-full bg-white/20 blur-3xl" />

            <Image
              src={jbl}
              alt="JBL Speaker"
              
              className="relative z-10 w-70 sm:w-100 lg:w-150 h-auto object-contain"
              priority
            />

          </div>

        </div>
      </div>
    </section>
  );
}