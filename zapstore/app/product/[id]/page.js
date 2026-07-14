"use client";

import Footer from "@/components/footer/Footer";
import NavBarComp from "@/components/navbar/NavBarComp";
import ProductDetails from "@/components/productdetails/ProductDetails";
import Saleoffer from "@/components/saleoffer/Saleoffer";
import { useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";

export default function Page() {
  const { currentUser } = useAppSelector((state) => state.auth);

  const params = useParams();
  const id = params.id;

  return (
    <>
      <Saleoffer />

      <NavBarComp currentUser={currentUser} />

      <div className="px-10 lg:px-20 py-10">
        Home / Product
      </div>

      <ProductDetails id={id} />

      <Footer />
    </>
  );
}