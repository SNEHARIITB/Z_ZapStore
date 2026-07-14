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
        const { currentUser } = useAppSelector((state) => state.auth);
    
    

        const dispatch = useAppDispatch();
    
    
        useEffect(() => {
            dispatch(getProducts());
        }, [dispatch]);


    return (
        <div>
            <Saleoffer />
            <NavBarComp currentUser={currentUser}  />



            <div className="px-10 lg:px-20 py-10">
                Home / Cart
            </div>

            <h2 className="px-10 lg:px-20 text-2xl lg:text-3xl font-bold mb-1">Billing Details</h2>

            <div className="px-10 lg:px-20 py-10  lg:flex gap-20 justify-between">
                <BillingForm />

                <OrderSummary  />
            </div>




            <Footer />

        </div>
    )
}

