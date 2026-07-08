"use client";

import React from "react";

export default function BillingForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">

      <form className="space-y-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-600 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-gray-600 mb-2">
            Company Name
          </label>

          <input
            type="text"
            className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-gray-600 mb-2">
            Street Address <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Apartment */}
        <div>
          <label className="block text-gray-600 mb-2">
            Apartment, floor, etc. (optional)
          </label>

          <input
            type="text"
            className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Town / City */}
        <div>
          <label className="block text-gray-600 mb-2">
            Town / City <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-red-500"
          />

          <span className="text-gray-600">
            Save this information for faster check-out next time.
          </span>
        </label>
      </form>
    </div>
  );
}