import Footer from '@/components/footer/Footer'
import NavBarComp from '@/components/navbar/NavBarComp'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import React from 'react'

export default function page() {

    return(
        <div>
            
            <Saleoffer/>

            <NavBarComp isLoggedin/>

            <div className="px-10 lg:px-20">

            </div>

            <Footer/>

        </div>
    )
}

