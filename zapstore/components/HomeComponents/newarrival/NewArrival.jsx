import Image from "next/image";
import Link from "next/link";

import ps5 from "@/assets/heropage/ps5.png";
import women from "@/assets/heropage/women.png";
import speaker from "@/assets/heropage/speaker.png";
import perfume from "@/assets/heropage/perfume.png";

export default function NewArrival() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-16">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-5 h-10 rounded bg-red-500"></div>
        <p className="text-red-500 font-semibold">Featured</p>
      </div>

      <h2 className="text-3xl font-bold mb-10">
        New Arrival
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Card */}
        <div className="relative bg-black rounded overflow-hidden min-h-150">

          <Image
            src={ps5}
            alt="PS5"
            fill
            className="object-contain"
          />

          <div className="absolute bottom-10 left-8 text-white max-w-xs">

            <h3 className="text-3xl font-semibold mb-3">
              PlayStation 5
            </h3>

            <p className="text-gray-300 mb-4">
              Black and White version of the PS5
              coming out on sale.
            </p>

            <Link
              href="/home"
              className="underline underline-offset-4 text-lg"
            >
              Shop Now
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-8">

          {/* Women */}
          <div className="relative bg-black rounded overflow-hidden h-71.25">

            <Image
              src={women}
              alt="Women"
              fill
              className="object-cover transform -scale-x-100"
            />

            <div className="absolute left-8 bottom-8 text-white max-w-xs">

              <h3 className="text-3xl font-semibold mb-3">
                Women's Collections
              </h3>

              <p className="text-gray-300 mb-4">
                Featured woman collections that
                give you another vibe.
              </p>

              <Link
                href="/home"
                className="underline underline-offset-4 text-lg"
              >
                Shop Now
              </Link>

            </div>

          </div>

          {/* Bottom Two */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Speaker */}
            <div className="relative bg-black rounded overflow-hidden h-71.25">

              <Image
                src={speaker}
                alt="Speaker"
                fill
                className="object-contain p-6"
              />

              <div className="absolute left-6 bottom-6 text-white">

                <h3 className="text-2xl font-semibold">
                  Speakers
                </h3>

                <p className="text-gray-300 my-2">
                  Amazon wireless speakers
                </p>

                <Link
                  href="/home"
                  className="underline underline-offset-4"
                >
                  Shop Now
                </Link>

              </div>

            </div>

            {/* Perfume */}
            <div className="relative bg-black rounded overflow-hidden h-71.25">

              <Image
                src={perfume}
                alt="Perfume"
                fill
                className="object-contain p-6"
              />

              <div className="absolute left-6 bottom-6 text-white">

                <h3 className="text-2xl font-semibold">
                  Perfume
                </h3>

                <p className="text-gray-300 my-2">
                  GUCCI INTENSE OUD EDP
                </p>

                <Link
                  href="/home"
                  className="underline underline-offset-4"
                >
                  Shop Now
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}