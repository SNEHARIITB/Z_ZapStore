"use client";

import React from "react";

export default function ProfilePage() {
  return (
    <div className="px-5 lg:px-20 py-10">

      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
        <p className="text-sm text-gray-500">
          Home <span className="mx-2">/</span>
          <span className="text-black">My Account</span>
        </p>

        <p className="text-sm">
          Welcome! <span className="text-red-500 font-medium">Md Rimel</span>
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12">

        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="space-y-8">

            <div>
              <h4 className="font-semibold mb-3">
                Manage My Account
              </h4>

              <ul className="space-y-2 pl-4">
                <li className="text-red-500 cursor-pointer">
                  My Profile
                </li>

                <li className="text-gray-500 cursor-pointer hover:text-black">
                  Address Book
                </li>

                <li className="text-gray-500 cursor-pointer hover:text-black">
                  My Payment Options
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">
                My Orders
              </h4>

              <ul className="space-y-2 pl-4">
                <li className="text-gray-500 hover:text-black cursor-pointer">
                  My Returns
                </li>

                <li className="text-gray-500 hover:text-black cursor-pointer">
                  My Cancellations
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">
                My Wishlist
              </h4>
            </div>

          </div>
        </aside>

        {/* Form */}
        <div className="flex-1 bg-white shadow-md rounded-md p-6 md:p-10">

          <h2 className="text-xl font-semibold text-red-500 mb-8">
            Edit Your Profile
          </h2>

          <form className="space-y-6">

            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 text-sm">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Md"
                  className="w-full bg-gray-100 rounded px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Rimel"
                  className="w-full bg-gray-100 rounded px-4 py-3 outline-none"
                />
              </div>

            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="rimel1111@gmail.com"
                  className="w-full bg-gray-100 rounded px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Address
                </label>

                <input
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  className="w-full bg-gray-100 rounded px-4 py-3 outline-none"
                />
              </div>

            </div>

            {/* Password */}
            <div>

              <label className="block mb-3 font-medium">
                Password Changes
              </label>

              <div className="space-y-4">

                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full bg-gray-100 rounded px-4 py-3 outline-none"
                />

                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full bg-gray-100 rounded px-4 py-3 outline-none"
                />

                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full bg-gray-100 rounded px-4 py-3 outline-none"
                />

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">

              <button
                type="button"
                className="px-8 py-3 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Save Changes
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}