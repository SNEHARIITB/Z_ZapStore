"use client";

import Footer from '@/components/footer/Footer'
import ExploreOurProducts from '@/components/HomeComponents/exploreproducts/ExploreOverProducts'
import NavBarComp from '@/components/navbar/NavBarComp'
import ProductCard from '@/components/productcard/ProductCard';
import Saleoffer from '@/components/saleoffer/Saleoffer'
import { getProducts } from '@/redux/features/product/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
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

    const visibleProducts = products;

    return (
        <div>

            <Saleoffer />

            <NavBarComp />

            <section className="px-5 sm:px-8 lg:px-20 py-10 mb-10">

                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h2 className="text-xl sm:text-md mt-2">
                            Wishlist(5)
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

                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={product._id}
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

                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mt-2">
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

                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={product._id}
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

        </div>
    )
}

