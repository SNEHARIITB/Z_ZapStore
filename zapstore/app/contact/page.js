"use client";

import Footer from "@/components/footer/Footer";
import NavBarComp from "@/components/navbar/NavBarComp";
import Saleoffer from "@/components/saleoffer/Saleoffer";
import {
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  return (
    <div >

      <Saleoffer />

      <NavBarComp />

      <div className="px-5 lg:px-20 py-10">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-10">
          Home <span className="mx-2">/</span>
          <span className="text-black">Contact</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-5">

          {/* Left Card */}
          <div className="lg:col-span-4 bg-white shadow-md rounded-md p-8 h-fit">

            <div className="flex items-center gap-4">
              <div className="bg-red-500 text-white rounded-full p-3">
                <FiPhone size={20} />
              </div>

              <h3 className="font-semibold text-lg">
                Call To Us
              </h3>
            </div>

            <p className="mt-6 text-gray-600">
              We are available 24/7, 7 days a week.
            </p>

            <p className="mt-3">
              Phone: +8801611112222
            </p>

            <hr className="my-8" />

            <div className="flex items-center gap-4">
              <div className="bg-red-500 text-white rounded-full p-3">
                <FiMail size={20} />
              </div>

              <h3 className="font-semibold text-lg">
                Write To Us
              </h3>
            </div>

            <p className="mt-6 text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>

            <p className="mt-4">
              customer@exclusive.com
            </p>

            <p className="mt-2">
              support@exclusive.com
            </p>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-8 bg-white shadow-md rounded-md p-6 md:p-8 h-full">

            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-gray-100 rounded px-4 py-3 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  className="bg-gray-100 rounded px-4 py-3 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="bg-gray-100 rounded px-4 py-3 outline-none"
                />

              </div>

              <textarea
                rows={10}
                placeholder="Your Message"
                className="w-full bg-gray-100 rounded px-4 py-3 outline-none resize-none"
              />

              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded transition"
                >
                  Send Message
                </button>
              </div>

            </form>

          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}