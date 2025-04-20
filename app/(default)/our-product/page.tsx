'use client'
import { useState } from "react";
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface OurProductItem {
    label: string;
    description: string;
    category: string;
    images: string[]; // Array of images for the carousel
}
const ourProductItems: OurProductItem[] = [
    { 
        label: "Shisha/Hookah Briquettes", 
        description: "We provide premium briquettes for all your needs. Shisha/Hookah briquettes crafted for the perfect smoking experience, and Barbecue briquettes designed to enhance your grill’s flavor. <br> Product Specification: <br> Moisture : 5% <br> Ash Content: 2% <br> Ash Color : White <br> Fix Carbon : 85% <br> Calorific value : 8000 Kcal <br> Volatile matter : 10% <br> Material : Pure Natural Coconut Shell <br> Burning Time : 2 Hours <br> Size : Cube 2.2, Cube 2.5, Cube 2.6, Cube 2.7, Finger, Half Finger, Hexa, Kalaud (Can be customized)",
        category: "Briquettes",
        images: ["/img/DSCF2897.JPG", "/img/DSCF2624.JPG", "/img/DSCF2898.JPG", "/img/DSCF2943.JPG"]
    },
    { 
        label: "BBQ Coconut Briquettes", 
        description: "We provide premium briquettes for all your needs. Shisha/Hookah briquettes crafted for the perfect smoking experience, and Barbecue briquettes designed to enhance your grill’s flavor. <br> Product Specification: <br> Moisture : 4.23% <br> Ash Content: 2.21% <br> Volatile Matter : 15.93% <br> Fix Carbon : 76.63%",
        category: "Briquettes",
        images: ["/img/BC1.JPG", "/img/BC2.JPG"]
    },
    { 
        label: "BBQ Sawdust Briquettes", 
        description: "We provide premium briquettes for all your needs. Shisha/Hookah briquettes crafted for the perfect smoking experience, and Barbecue briquettes designed to enhance your grill’s flavor.",
        category: "Briquettes",
        images: ["/img/sawdust4.JPG", "/img/BS1.webp", "/img/BCVID.MP4"]
    },
    { 
        label: "Binchotan Charcoal", 
        description: "We manufacture premium binchotan charcoal, commonly used in Japan and South Korea, made from high-quality hardwoods such as Acacia wood, Pelawan wood (Tristaniopsis), and Water apple wood (Syzygium). <br> Product Specification: <br> Moisture : 4.89% <br> Ash Content: 2.47% <br> Volatile Matter : 5.18% <br> Fix Carbon : 91.42%",
        category: "Hardwood Charcoal",
        images: ["/img/produk1.JPG", "/img/produk2.JPG", "/img/video_binchotan.MP4", "/img/video_binchotan2.MP4"]
    },
    { 
        label: "Hardwood Charcoal", 
        description: ".........",
        category: "Hardwood Charcoal",
        images: ["/img/Hardwood.webp"]
    },
    { 
        label: "Wood Pallet", 
        description: "We produce high-calorie wood pellet variants, specifically designed for use in boilers and widely utilized by textile companies. Our pellets offer superior energy efficiency, making them an ideal choice for industries seeking sustainable and cost-effective fuel solutions. <br> Product Specification: <br> Moisture : 4.32% <br> Ash Content: 1.59% <br> Volatile Matter : 80.17% <br> Fix Carbon : 13.92% <br> Total Sulphur : 0.07% <br> Gross Calories Value : 4.421 Kcal/kg",
        category: "Others",
        images: ["/img/pallet.jpg"]
    },
    { 
        label: "Palm Shell", 
        description: ".........",
        category: "Others",
        images: ["/img/palm.webp"]
    },
];

export default function OurProduct() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Briquettes");
    const [modalData, setModalData] = useState<OurProductItem | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const openModal = (item: OurProductItem) => {
        setModalData(item);
        setCurrentImageIndex(0);
    };

    const renderDescription = (description: string) => {
        return <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />;
    };

    return (
        <>
            <Header active={"our-product"} />
            <BackgroundGhost />
            <div className="relative text-black mt-8 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl h1 mb-6 text-center">Our Products</h1>
                    <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
                        Explore our collection of high-quality products and experience our dedication to excellence.
                    </p>
                </div>
            </div>

            {/* Category Buttons */}
            <div className="container mx-auto px-4 mb-16">
                <div className="flex justify-center space-x-8 border-b border-gray-200">
                    <ToggleGroup.Root
                        className="inline-flex rounded-lg shadow-md bg-gray-100 mb-12"
                        type="single"
                        defaultValue="Briquettes"
                        value={selectedCategory}
                        onValueChange={(value) => {
                            if (value) {
                                setIsLoading(true);
                                setSelectedCategory(value);
                                setTimeout(() => setIsLoading(false), 500);
                            }
                        }}
                        aria-label="Category selection"
                    >
                        {["Briquettes", "Hardwood Charcoal", "Others"].map((category) => (
                            <ToggleGroup.Item
                                key={category}
                                className="px-6 py-3 flex items-center justify-center bg-white text-gray-600 first:rounded-l last:rounded-r hover:bg-gray-50 focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-blue-500 focus:outline-none data-[state=on]:bg-blue-500 data-[state=on]:text-white transition-all duration-200"
                                value={category}
                                aria-label={`${category} category`}
                            >
                                {category}
                            </ToggleGroup.Item>
                        ))}
                    </ToggleGroup.Root>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 mb-16">
                <div className="relative mt-12">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                        {ourProductItems.filter((item) => item.category === selectedCategory).map((item, index) => (
                            <div 
                                key={index} 
                                className="group transform transition-all duration-300 hover:translate-y-[-4px]"
                            >
                                <div 
                                    className="cursor-pointer overflow-hidden rounded-xl shadow-lg aspect-[4/3] mb-4"
                                    onClick={() => setModalData(item)}
                                >
                                    <img
                                        src={item.images[0]}
                                        alt={item.label}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                                    {item.label}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full-Screen Modal */}
            <div className="container mx-auto px-4 mb-16">
                {modalData && (
                    <div className="fixed inset-0 bg-white z-50 overflow-hidden">
                        <div className="h-full flex flex-col">
                            <div className="px-12 py-6 border-b flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-900">{modalData.label}</h2>
                                <button
                                    onClick={() => setModalData(null)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 flex">
                                <div className="flex-1 bg-gray-50 flex items-center justify-center p-12">
                                    <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                                        {modalData.images[currentImageIndex] && (
                                            <>
                                                <img
                                                    src={modalData.images[currentImageIndex]}
                                                    alt={modalData.label}
                                                    className="max-w-full max-h-full w-auto h-auto object-contain"
                                                />
                                                <button
                                                    className="absolute left-4 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                                                    onClick={() => setCurrentImageIndex((prev) => 
                                                        (prev - 1 + modalData.images.length) % modalData.images.length
                                                    )}
                                                >
                                                    &#8592;
                                                </button>
                                                <button
                                                    className="absolute right-4 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                                                    onClick={() => setCurrentImageIndex((prev) => 
                                                        (prev + 1) % modalData.images.length
                                                    )}
                                                >
                                                    &#8594;
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="w-[400px] border-l p-8 overflow-y-auto">
                                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                                    {renderDescription(modalData.description)}
                                    <div className="space-y-4 mt-4">
                                        <h3 className="text-lg font-semibold mb-4">Gallery</h3>
                                        <div className="grid grid-cols-3 gap-3">
                                            {modalData.images.map((src, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`aspect-square rounded-lg overflow-hidden ${
                                                        currentImageIndex === idx ? 'ring-2 ring-blue-500' : ''
                                                    }`}
                                                >
                                                    <img src={src} alt="" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
