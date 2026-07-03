import Footer from '@/components/footer/Footer'

import NavBarComp from '@/components/navbar/NavBarComp'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import Image from 'next/image'
import React from 'react';

import loginimg from "@/assets/loginpage/loginimage.png";
import AuthForm from '@/components/authform/AuthForm';

export default function page() {
    return (
        <div>

            <Saleoffer />

            <NavBarComp />

            <div className="flex flex-col lg:flex-row min-w-full lg:py-10">
                <div className="lg:w-1/2">
                    <Image
                        src={loginimg}
                        alt="Login Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="py-20 pr-10 lg:px-20 lg:w-1/2 flex items-center justify-center">
                    <AuthForm type="signup" />
                </div>
            </div>


            <Footer />

        </div>
    )
}