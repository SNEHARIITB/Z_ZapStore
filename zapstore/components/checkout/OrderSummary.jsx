"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { login } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React, { useState } from "react";

export default function OrderSummary() {

  const [showSuccess, setShowSuccess] = useState(false);

  const { currentUser } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const router = useRouter();


  const cartedProducts = currentUser?.cart || [];


  const subtotal = cartedProducts.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    if (!currentUser?.cart?.length) {
      toast.error("Your cart is empty. Please add products first.", {
        duration: 2000,
      });
      return;
    }
    const toastId = toast.loading("Placing your order...");

    toast.dismiss(toastId);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) =>
      user.email === currentUser.email
        ? { ...user, cart: [] }
        : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update current user
    const updatedCurrentUser = {
      ...currentUser,
      cart: [],
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedCurrentUser)
    );

    // Update Redux
    dispatch(login(updatedCurrentUser));

    toast.success("Order placed successfully!");

    // Show success modal
    setShowSuccess(true);
  };

  return (
    <div className="w-full lg:max-w-md">
      {/* Products */}
      <div className="space-y-6">
        {cartedProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-14 h-14 object-contain"
              />

              <span className="text-sm md:text-base">
                {product.name}
              </span>
            </div>

            <span className="font-medium">
              ${(product.price * (product.quantity || 1)).toFixed(2)}
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
            {/* <img
              src="/payments/bkash.png"
              alt="Bkash"
              className="h-5"
            /> */}
            <img
              src="/payments/visa.png"
              alt="Visa"
              className="h-5"
            />
            {/* <img
              src="/payments/mastercard.png"
              alt="MasterCard"
              className="h-5"
            />
            <img
              src="/payments/nagad.png"
              alt="Nagad"
              className="h-5"
            />*/}
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
      <button className="mt-8 w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-md"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>


      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[80%] max-w-md text-center">

            <div className="text-4xl md:text-6xl mb-4">✅</div>

            <h2 className="text-2xl font-semibold">
              Order Placed Successfully
            </h2>

            <p className="text-gray-500 mt-3">
              Thank you for shopping with ZapStore.
            </p>

            <button
              onClick={() => {
                setShowSuccess(false)
                router.push("/home");
              }}
              className="mt-6 bg-red-500 text-white px-8 py-3 rounded"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </div>
  );
}