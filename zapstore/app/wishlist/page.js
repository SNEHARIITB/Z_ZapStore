"use client";

import Footer from '@/components/footer/Footer'
import ExploreOurProducts from '@/components/HomeComponents/exploreproducts/ExploreOverProducts'
import NavBarComp from '@/components/navbar/NavBarComp'
import ProductCard from '@/components/productcard/ProductCard';
import Saleoffer from '@/components/saleoffer/Saleoffer'
import { getProducts } from '@/redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function page() {

    const { currentUser } = useAppSelector((state) => state.auth);

    const wishedProducts = currentUser?.wishlist || [];

    const dispatch = useAppDispatch();

    const { products, loading } = useAppSelector(
        (state) => {
            return state.product
        }
    );

    useEffect(() => {
        //console.log(wishedProducts);
    }, [wishedProducts]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <ProtectedRoute>

            <Saleoffer />

            <NavBarComp currentUser={currentUser} />

            <section className="px-5 sm:px-8 lg:px-20 py-10 mb-10">

                <div className="flex justify-between items-center mb-8">

                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-5 h-10 bg-red-500 rounded"></div>
                        <h2 className="text-xl sm:text-md mt-2">
                            
                            Wishlist({wishedProducts.length})
                        </h2>
                    </div>

                    <div className="flex gap-3">

                        <button
                            className="w-50 h-10 border rounded-full flex items-center justify-center transition"
                        >
                            Move All To Bag
                        </button>

                    </div>

                </div>

                {/* Products */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {wishedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-500">
                        Loading...
                    </div>
                )}

            </section>

            <section className="px-5 sm:px-8 lg:px-20 py-10">

                <div className="flex justify-between items-center mb-8">

                <div className="flex items-center gap-3 mb-8">
                    <div className="w-5 h-10 bg-red-500 rounded"></div>

                    <h2 className="text-2xl font-semibold">
                        Just For You
                    </h2>
                </div>

                    <div className="flex gap-3">

                        <button
                            className="w-50 h-10 border rounded-full flex items-center justify-center transition"
                        >
                            See All
                        </button>

                    </div>

                </div>

                {/* Products */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.slice(0, 8).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-500">
                        Loading...
                    </div>
                )}

            </section>

            <Footer />

        </ProtectedRoute>
    )
}

