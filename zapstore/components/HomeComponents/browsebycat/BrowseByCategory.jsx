
import { ArrowLeft, ArrowRight, BookOpen, Camera, ChevronLeft, ChevronRight, Computer, Gamepad2, Gem, Headset, Smartphone, Watch } from "lucide-react";
import { useRef } from "react";

export default function BrowseByCatrgory() {

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -320,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 320,
            behavior: "smooth",
        });
    };

    const categories = [
        {
            name: "Phones",
            icon: Smartphone,
        },
        {
            name: "Computers",
            icon: Computer,
        },
        {
            name: "SmartWatch",
            icon: Watch,
        },
        {
            name: "Jewellery",
            icon: Gem,
        },
        {
            name: "Gaming",
            icon: Gamepad2,
        },
        {
            name: "Headphones",
            icon: Headset,
        },
        {
            name: "Camera",
            icon: Camera,
        },
        {
            name: "Books",
            icon: BookOpen,
        },

    ];


    return (
        <div className="px-5 sm:px-8 lg:px-20 py-10 text-center space-y-10 border-b-amber-700">

            <div className="py-10">
                <div className="flex justify-between items-center mb-8">

                    <div className="flex gap-30 text-start items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 sm:w-5 h-10 bg-red-500 rounded"></div>
                                <p className="text-red-500 text-start font-semibold">
                                    Categories
                                </p>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                                Browse By Category
                            </h2>
                        </div>

                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                            <ArrowLeft />
                        </button>

                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        >
                            <ArrowRight />
                        </button>
                    </div>

                </div>

                <div ref={sliderRef} className="flex gap-8 pt-5 overflow-x-auto scroll-smooth scrollbar-none">
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <div
                                key={category.name}
                                className="min-h-30 min-w-30 border rounded-md flex flex-col justify-center items-center gap-3 cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                                <Icon size={30} />
                                <p className="text-sm font-medium">{category.name}</p>
                            </div>
                        );
                    })}
                </div>


            </div>


        </div>
    )
}