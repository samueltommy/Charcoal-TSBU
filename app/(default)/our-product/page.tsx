'use client'
import { useState, useEffect } from "react";
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";

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

    const openModal = (item: OurProductItem) => {
        setModalData(item);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setModalData(null);
        setCurrentImageIndex(0);
    };

    const setImageIndex = (index: number) => setCurrentImageIndex(index);

    const filteredItems = ourProductItems.filter((item) => item.category === selectedCategory);

    const renderDescription = (description: string) => {
        const parts = description.split('<br>');
        return (
            <div>
                {parts.map((part, i) => (
                    <p key={i} className="mb-2">
                        {part.startsWith('- ') ? <li>{part.replace('- ', '')}</li> : part}
                    </p>
                ))}
            </div>
        );
    };

    const renderMedia = (src: string) => {
        if (src.endsWith('.MP4')) {
            return (
                <video
                    src={src}
                    controls
                    className="w-full h-auto object-contain"
                >
                    Your browser does not support the video tag.
                </video>
            );
        }
        return <img src={src} alt="media" className="w-full h-auto object-contain" />;
    };

    return (
        <>
            <Header active={"our-product"} />
            <BackgroundGhost />

            {/* Category Buttons */}
            <div className="w-full flex justify-center mt-12 gap-6">
                {["Briquettes", "Hardwood Charcoal", "Others"].map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded ${
                            selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 p-4">
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() => openModal(item)}
                    >
                        <img
                            src={item.images[0]} // First image preview
                            alt={item.label}
                            className="object-cover w-full h-60 rounded-md transition-transform transform group-hover:scale-105"
                        />
                        <div className="text-center mt-2 font-semibold text-gray-700 group-hover:text-blue-500">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Full-Screen Modal */}
            {modalData && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-white text-4xl font-bold z-10"
                        onClick={closeModal}
                    >
                        &times;
                    </button>

                    {/* Modal Content */}
                    <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
                        {/* Image Section */}
                        <div className="relative w-full md:w-3/4">
                            {renderMedia(modalData.images[currentImageIndex])}

                            {/* Navigation Arrows */}
                            <button
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
                                onClick={() =>
                                    setCurrentImageIndex((prevIndex) =>
                                        (prevIndex - 1 + modalData.images.length) % modalData.images.length
                                    )
                                }
                            >
                                &#8592;
                            </button>
                            <button
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600"
                                onClick={() =>
                                    setCurrentImageIndex((prevIndex) =>
                                        (prevIndex + 1) % modalData.images.length
                                    )
                                }
                            >
                                &#8594;
                            </button>
                        </div>

                        {/* Description Section */}
                        <div className="p-6 w-full md:w-1/4 bg-gray-100 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4">{modalData.label}</h2>
                            {renderDescription(modalData.description)}

                            {/* Thumbnails */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {modalData.images.map((src, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-16 h-16 border ${
                                            currentImageIndex === index ? "border-blue-500" : "border-gray-300"
                                        }`}
                                    >
                                        {src.endsWith('.MP4') ? (
                                            <video
                                                src={src}
                                                className="w-full h-full object-cover"
                                                muted
                                                loop
                                                playsInline
                                            />
                                        ) : (
                                            <img src={src} alt={`thumbnail-${index}`} className="w-full h-full object-cover" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
