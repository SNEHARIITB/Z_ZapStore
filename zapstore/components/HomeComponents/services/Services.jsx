"use client";

import {
  Truck,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    subtitle: "Free delivery for all orders over $140",
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    subtitle: "Friendly 24/7 customer support",
  },
  {
    icon: ShieldCheck,
    title: "MONEY BACK GUARANTEE",
    subtitle: "We return money within 30 days",
  },
];

export default function Services() {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Outer Circle */}
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">

                {/* Inner Circle */}
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <Icon size={28} className="text-white" />
                </div>

              </div>

              <h3 className="mt-6 text-lg font-bold">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {service.subtitle}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}