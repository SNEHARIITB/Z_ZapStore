
"use client";

import FlashSale from '@/components/HomeComponents/flashsale/FlashSale'
import Footer from '@/components/footer/Footer'
import HeroCarousel from '@/components/HomeComponents/herocarousel/HeroCarousel'
import NavBarComp from '@/components/navbar/NavBarComp'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import { ChevronRight } from 'lucide-react'
import React from 'react'



import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/slices/productSlice.js";
import BrowseByCatrgory from '@/components/HomeComponents/browsebycat/BrowseByCategory';
import BestSelling from '@/components/HomeComponents/bestselling/BestSelling';
import ExploreOurProducts from '@/components/HomeComponents/exploreproducts/ExploreOverProducts';
import MusicExpe from '@/components/HomeComponents/musicexpe/MusicExpe';
import Services from '@/components/HomeComponents/services/Services';

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

// const products = {
//   "error": false,
//   "message": "All products",
//   "data": [
//     {
//       "_id": "6a436fe5b688b2f6221d1773",
//       "pName": "Porsche 911",
//       "pPrice": 2700000,
//       "pDesc": "The Porsche 911 model series",
//       "pImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5S4cD8zcnRSmFGhtDPq-800b4yzgaEixRYTU7szn08w&s=10",
//       "date": "2026-06-30T07:26:28.212Z",
//       "__v": 0
//     },
//     {
//       "_id": "6a4498e68fea34bebde2e3bc",
//       "pName": "MSI GF75",
//       "pPrice": 250000,
//       "pDesc": "Gaming laptop",
//       "pImg": "https://m.media-amazon.com/images/I/81lxm4dFfvL._AC_UF1000,1000_QL80_.jpg",
//       "date": "2026-07-01T04:33:52.887Z",
//       "__v": 0
//     },
//     {
//       "_id": "6a4499168fea34bebde2e3c2",
//       "pName": "Blantley",
//       "pPrice": 107643,
//       "pDesc": "The GT-R is a sports car/grand tourer that succeeded the Nissan Skyline GT-R.",
//       "pImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7WYexd-AJgL9iVzl4xIZprrUXfXLP5dAiw&s",
//       "date": "2026-07-01T04:33:52.887Z",
//       "__v": 0
//     },
//     {
//       "_id": "6a44ad09fae5c57701afdae4",
//       "pName": "Wild Stone",
//       "pPrice": 348,
//       "pDesc": "Good Fragrance",
//       "pImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ20BzErZfpWKDWmzBbEIfkFjOm-na5T0r0ao4cLVTpSg&s=10",
//       "date": "2026-07-01T05:21:42.401Z",
//       "__v": 0
//     },
//     {
//       "_id": "6a44fdc6c35dea8799245617",
//       "pName": "Philips Air Fryer",
//       "pPrice": 3999,
//       "pDesc": "No oli required",
//       "pImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn7mENgts5KqWjzRrWi8-4G6td-BsIgajXHuoKR4StQ&s=10",
//       "date": "2026-07-01T11:28:46.640Z",
//       "__v": 0
//     },
//         {
//       "_id": "6a44fdc6c35dea8799245317",
//       "pName": "Philips Air Fryer",
//       "pPrice": 2999,
//       "pDesc": "No oli required",
//       "pImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn7mENgts5KqWjzRrWi8-4G6td-BsIgajXHuoKR4StQ&s=10",
//       "date": "2026-07-01T11:28:46.640Z",
//       "__v": 0
//     },
//         {
//       "_id": "6a44fdc6c35dea8799243617",
//       "pName": "Philips Air Fryer",
//       "pPrice": 4999,
//       "pDesc": "No oli required",
//       "pImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn7mENgts5KqWjzRrWi8-4G6td-BsIgajXHuoKR4StQ&s=10",
//       "date": "2026-07-01T11:28:46.640Z",
//       "__v": 0
//     },
//         {
//       "_id": "6a44fdc6c35dea8799345617",
//       "pName": "Philips Air Fryer",
//       "pPrice": 5999,
//       "pDesc": "No oli required",
//       "pImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn7mENgts5KqWjzRrWi8-4G6td-BsIgajXHuoKR4StQ&s=10",
//       "date": "2026-07-01T11:28:46.640Z",
//       "__v": 0
//     }
//   ]
// }
    

    return (
        <div>

            <Saleoffer />

            <NavBarComp isLoggedin />

            <div className="px-10 lg:px-20 py-10">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-3.5">
                            <div className="flex items-center justify-between">
                                <p>Woman's Fashion</p>
                                <ChevronRight size={16} />
                            </div>

                            <div className="flex items-center justify-between">
                                <p>Men's Fashion</p>
                                <ChevronRight size={16} />
                            </div>

                            <p>Electronics</p>
                            <p>Home & Lifestyle</p>
                            <p>Medicine</p>
                            <p>Sports & Outdoor</p>
                            <p>Baby's & Toys</p>
                            <p>Groceries & Pets</p>
                            <p>Health & Beauty</p>
                        </div>
                    </div>

                    {/* Hero Carousel */}
                    <div className="lg:col-span-3">
                        <HeroCarousel />
                    </div>

                </div>

            </div>

            <FlashSale products={products} />

            <BrowseByCatrgory />

            <BestSelling products = {products} />

            <MusicExpe />

            <ExploreOurProducts products={products} />

            <Services />

            <Footer />

        </div>
    )
}

