import Footer from '@/components/footer/Footer'
import NavBarComp from '@/components/navbar/NavBarComp'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div>
            <Saleoffer />

            <NavBarComp currentUser={currentUser} />

            <div className="px-5 lg:px-20 py-10">
                <div>
                    <p className="text-sm text-gray-500">
                        Home <span className="mx-2">/</span>
                        <span className="text-black">404 Error</span>
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center p-10">

                    <div className="flex flex-col items-center justify-center p-10">
                        <h1 className="text-2xl md:text-5xl lg:text-8xl p-10">
                            404 Not Found
                        </h1>
                        <h6>
                            Your visited page not found. You may go home page.
                        </h6>
                    </div>

                    <div>
                        <Link href="/home">
                            <button className="mt-8 w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-md">
                                Back To Home Page
                            </button>
                        </Link>
                    </div>

                </div>


            </div>

            <Footer />

        </div>
    )
}


