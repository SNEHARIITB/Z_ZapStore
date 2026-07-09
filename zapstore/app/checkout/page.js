"use client";

import BillingForm from '@/components/checkout/BillingForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import Footer from '@/components/footer/Footer';
import NavBarComp from '@/components/navbar/NavBarComp';
import Saleoffer from '@/components/saleoffer/Saleoffer';
import { getProducts } from '@/redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect } from 'react'

export default function page() {

        const dispatch = useAppDispatch();
    
        const { products, loading } = useAppSelector(
            (state) => {
                return state.product
            }
        );
    
        useEffect(() => {
            dispatch(getProducts());
        }, [dispatch]);


    return (
        <div>
            <Saleoffer />
            <NavBarComp />



            <div className="px-10 lg:px-20 py-10">
                Home / Cart
            </div>

            <h2 className="px-10 lg:px-20 text-2xl lg:text-3xl font-bold mb-1">Billing Details</h2>

            <div className="px-10 lg:px-20 py-10  lg:flex gap-20 justify-between">
                <BillingForm />

                <OrderSummary products={products} />
            </div>




            <Footer />

        </div>
    )
}

