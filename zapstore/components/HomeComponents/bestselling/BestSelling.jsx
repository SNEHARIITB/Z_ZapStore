
import ProductCard from "@/components/productcard/ProductCard.jsx";
import { useEffect, useState } from "react";

export default function BestSelling({ products }) {

    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const updateItemsPerPage = () => {
            let items = 4;

            if (window.innerWidth >= 1024) {
                items = 4;
            } else if (window.innerWidth >= 768) {
                items = 3;
            } else if (window.innerWidth >= 640) {
                items = 2;
            } else {
                items = 1;
            }

            setItemsPerPage(items);
            setPage(0);
        };

        updateItemsPerPage();

        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);


    const visibleProducts = products.slice(
        page * itemsPerPage,
        page * itemsPerPage + itemsPerPage
    );




    return (
        <div className="px-5 sm:px-8 lg:px-20 py-10 text-center space-y-10">

            <div>
                <div className="flex justify-between items-center mb-8">

                    <div className="flex gap-30 text-start items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 sm:w-5 h-10 bg-red-500 rounded"></div>
                                <p className="text-red-500 text-start font-semibold">This Month</p>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                                Best Selling Products
                            </h2>
                        </div>


                    </div>

                    <div className=" items-center">
                        <button className="bg-red-500 text-white text-sm px-3 py-2 md:px-5 md:py-3 rounded">
                            View All Products
                        </button>
                    </div>

                </div>

                {products.length ?
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-hidden overflow-y-hidden scroll-smooth scrollbar-none"
                    >
                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    :
                    <div>Loading...</div>
                }

            </div>





        </div>
    )
}