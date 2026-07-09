import Footer from '@/components/footer/Footer'
import NavBarComp from '@/components/navbar/NavBarComp'
import ProductDetails from '@/components/productdetails/ProductDetails'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import React from 'react'

export default function page() {
  return (
    <div>
        <Saleoffer />

        <NavBarComp />

        <ProductDetails />

        <Footer />
      
    </div>
  )
}

