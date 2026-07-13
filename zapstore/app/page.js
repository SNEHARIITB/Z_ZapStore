"use client"


import Link from "next/link";






export default function Home() {



  return (
    <>
      <h1
        className="text-xl items-center my-auto mx-auto
      border p-5 bg-cyan-800 rounded-2xl text-white
      hover: font-bold"
      >
        <Link href={"/login"}>Go to ZapStore Login Page</Link>
      </h1>

    </>
  );
}
