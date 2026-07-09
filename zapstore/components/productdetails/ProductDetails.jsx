import React from 'react'

export default function ProductDetails() {
    return (
        <div className="px-5 lg:px-20 py-10">
            <div>
                <div className="flex justify-between items-center mb-8">

                    <div className="flex gap-30">
                        <div>
                            <h2 className="text-red-500 text-start font-semibold text-3xl mt-2">
                                Related Items
                            </h2>
                        </div>

                    </div>
                </div>

                {/* {products.length ?
                    <div
                        className="flex gap-6 overflow-x-hidden overflow-y-hidden scroll-smooth scrollbar-none"
                    >
                        {visibleProducts.map((product) => (
                            <div
                                key={product._id}
                                className="min-w-67.5 shrink-0"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    :
                    <div>Loading...</div>
                } */}

            </div>

        </div>
    )
}
