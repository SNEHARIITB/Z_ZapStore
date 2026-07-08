"use client";

import React from "react";

export default function OrderSummary({ products }) {

    const cartedProducts = products;
  const subtotal = cartedProducts.reduce(
    (sum, item) => sum + item.pPrice * (item.quantity || 1),
    0
  );

  return (
    <div className="w-full lg:max-w-md">
      {/* Products */}
      <div className="space-y-6">
        {cartedProducts.map((product) => (
          <div
            key={product._id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.pImg}
                alt={product.pName}
                className="w-14 h-14 object-contain"
              />

              <span className="text-sm md:text-base">
                {product.pName}
              </span>
            </div>

            <span className="font-medium">
              ${(product.pPrice * (product.quantity || 1)).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-8 space-y-4">
        <div className="flex justify-between border-b pb-3">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment */}
      <div className="mt-8 space-y-5">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              defaultChecked
              className="accent-black"
            />
            <span>Bank</span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/payments/bkash.png"
              alt="Bkash"
              className="h-5"
            />
            <img
              src="/payments/visa.png"
              alt="Visa"
              className="h-5"
            />
            <img
              src="/payments/mastercard.png"
              alt="MasterCard"
              className="h-5"
            />
            <img
              src="/payments/nagad.png"
              alt="Nagad"
              className="h-5"
            />
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            className="accent-black"
          />
          <span>Cash on delivery</span>
        </label>
      </div>

      {/* Coupon */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 border rounded-md px-4 py-3 outline-none"
        />

        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md">
          Apply Coupon
        </button>
      </div>

      {/* Place Order */}
      <button className="mt-8 w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-md">
        Place Order
      </button>
    </div>
  );
}