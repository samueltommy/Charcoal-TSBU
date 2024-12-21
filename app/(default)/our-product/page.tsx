'use client'
import { useState } from "react";
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";

interface OurProductItem {
    label: string;
    description: string;
    images: string[]; // Array of images for the carousel
}
const ourProductItems: OurProductItem[] = [
    { 
        label: "Briquettes", 
        description: "We provide premium briquettes for all your needs. Shisha/Hookah briquettes crafted for the perfect smoking experience, and Barbecue briquettes designed to enhance your grill’s flavor.",
        images: ["/img/Gallery1.webp", "/img/Gallery10.webp", "/img/Gallery18.webp"]
    },
    { 
        label: "Hardwood Charcoal", 
        description: "We manufacture premium binchotan charcoal, commonly used in Japan andSouth Korea, made from high-quality hardwoods such as Acacia wood,Pelawan wood (Tristaniopsis), and Water apple wood (Syzygium).",
        images: ["/img/Gallery1.webp", "/img/Gallery10.webp", "/img/Gallery18.webp"]
    },
    { 
        label: "Others", 
        description: ".........",
        images: ["/img/Gallery1.webp", "/img/Gallery10.webp", "/img/Gallery18.webp"]
    },
];

export default function OurProduct() {
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

    return (
        <>
            <Header active={"our-product"} />
            <BackgroundGhost />

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 p-4">
                {ourProductItems.map((item, index) => (
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
                            <img
                                src={modalData.images[currentImageIndex]}
                                alt={modalData.label}
                                className="w-full h-full object-contain"
                            />

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
                            <p className="text-gray-600 mb-4">{modalData.description}</p>

                            {/* Thumbnails */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {modalData.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Thumbnail ${index}`}
                                        className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                                            currentImageIndex === index ? "border-blue-500" : "border-gray-300"
                                        }`}
                                        onClick={() => setImageIndex(index)}
                                    />
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
