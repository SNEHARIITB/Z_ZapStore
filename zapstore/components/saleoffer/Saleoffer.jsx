import React from "react";
import { ChevronDown } from "lucide-react";

export default function Saleoffer() {
  return (
    <div className="bg-black text-white px-10 lg:px-20 py-2">
      <div className="flex items-center justify-between">

        
        <div className="w-20 hidden lg:block"></div>

        {/* Sale Offer */}
        <div className="flex flex-1 items-center justify-center gap-2">
          <p className="text-xs lg:text-sm text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>

          <button className="text-xs lg:text-sm font-semibold underline hover:text-red-400 transition">
            Shop Now
          </button>
        </div>

        {/* Language */}
        <button className="flex w-20 items-center justify-end gap-1 text-xs lg:text-sm">
          English
          <ChevronDown size={16} />
        </button>

      </div>
    </div>
  );
}
