import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";

import qrcode from "@/assets/footer/Qrcode.png";
import googleplay from "@/assets/footer/googleplay.png";
import applestore from "@/assets/footer/applestore.png";

function Footer() {
  return (
    <footer className="bg-black text-white px-5 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl py-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold">ZapStore</h2>

            <p className="mt-5 text-lg font-semibold">Subscribe</p>

            <p className="mt-3 text-sm text-gray-300">
              Get 10% off on your first order
            </p>

            <div className="mt-5 flex items-center rounded-md border border-gray-500 px-3 py-3">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

              <IoSendOutline className="cursor-pointer text-xl" />
            </div>
          </div>


          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold">Support</h3>

            <div className="mt-5 space-y-3 text-sm text-gray-300">
              <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>

              <p>exclusive@gmail.com</p>

              <p>+88 015-888-9999</p>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold">Account</h3>

            <div className="mt-5 space-y-3 text-sm text-gray-300">
              <p className="cursor-pointer hover:text-white">My Account</p>
              <p className="cursor-pointer hover:text-white">
                Login / Register
              </p>
              <p className="cursor-pointer hover:text-white">Cart</p>
              <p className="cursor-pointer hover:text-white">Wishlist</p>
              <p className="cursor-pointer hover:text-white">Shop</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold">Quick Link</h3>

            <div className="mt-5 space-y-3 text-sm text-gray-300">
              <p className="cursor-pointer hover:text-white">
                Privacy Policy
              </p>

              <p className="cursor-pointer hover:text-white">
                Terms Of Use
              </p>

              <p className="cursor-pointer hover:text-white">FAQ</p>

              <p className="cursor-pointer hover:text-white">Contact</p>
            </div>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-xl font-semibold">Download App</h3>

            <p className="mt-4 text-xs text-gray-400">
              Save $3 with App New User Only
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Image
                src={qrcode}
                alt="QR Code"
                className="h-24 w-24 object-contain"
              />

              <div className="flex h-24 flex-col justify-center">
                <Image
                  src={googleplay}
                  alt="Google Play"
                  className="h-10 w-auto m-0 p-0 object-contain"
                />

                <Image
                  src={applestore}
                  alt="Apple Store"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-5 text-xl">
              <FaFacebookF className="cursor-pointer transition hover:text-gray-400" />
              <FaTwitter className="cursor-pointer transition hover:text-gray-400" />
              <FaInstagram className="cursor-pointer transition hover:text-gray-400" />
              <FaLinkedinIn className="cursor-pointer transition hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ZapStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;