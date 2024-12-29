'use client'
import { useState } from "react";
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";

interface GalleryItem {
    label: string;
    description: string;
    category: string;
    images: string[]; // Array of images for the carousel
}
const galleryItems: GalleryItem[] = [
    { 
        label: "Factory Front View", 
        description: "Here is the front view of the charcoal factory, showcasing a corrugated metal roof, green and gray painted walls.",
        category: "Factory",
        images: ["/img/Factory2.webp", "/img/DSCF3069.JPG", "/img/DSCF3052.JPG"]
    },
    { 
        label: "Factory Inside View", 
        description: "The inside of the factory houses essential machinery, including a robust coal grinder, a sieve for filtering coal dust, a mixer for blending materials, and a molder for shaping the briquettes; it also features two types of ovens—one dedicated to briquette production and another for processing hardwood.",
        category: "Factory",
        images: ["/img/DSCF2440.JPG", "/img/DSCF2507.JPG", "/img/DSCF2641.JPG", "/img/DSCF2614.JPG"]
    },
    { 
        label: "Grinder and Sieve Machine", 
        description: "The robust coal grinder crushes large coal pieces into fine particles, while the sieve filters and separates the coal dust from larger fragments, ensuring consistent particle size for processing.",
        category: "Factory",
        images: ["/img/DSCF2481.JPG", "/img/DSCF2485.JPG"]
    },
    { 
        label: "Mixer Machine", 
        description: "The mixer machine is designed to blend crushed coal, binders, and other additives into a uniform mixture, ensuring the materials are evenly distributed and properly prepared for molding and briquette production.",
        category: "Factory",
        images: ["/img/DSCF2494.JPG", "/img/DSCF2970.JPG", "/img/DSCF2492.JPG"]
    },
    { 
        label: "Molder and Slicing Machine", 
        description: "The molder shapes the blended coal mixture into uniform briquettes or desired forms, while the conveyor belt efficiently transports the molded pieces to the slicing machine, which cuts them into precise sizes for final processing.",
        category: "Factory",
        images: ["/img/DSCF2551.JPG", "/img/DSCF2534.JPG", "/img/DSCF2532.JPG", "/img/DSCF2502.JPG"]
    },
    { 
        label: "Briquette Oven", 
        description: "The briquette ovens are used to dry the charcoal briquettes, ensuring they reach the optimal moisture content for durability and efficiency, with five ovens in operation to handle large volumes of production simultaneously.",
        category: "Factory",
        images: ["/img/DSCF2756.JPG", "/img/DSCF2796.JPG"]
    },
    { 
        label: "Hardwood Oven", 
        description: "The hardwood oven is designed to reach temperatures of up to 900°C, efficiently carbonizing the hardwood to produce high-quality charcoal, ensuring optimal heat retention and durability in the final product.",
        category: "Factory",
        images: ["/img/HARDWOODOVEN.JPG"]
    },
    { 
        label: "BBQ Coconut Briquttes", 
        description: "BBQ coconut briquettes are eco-friendly, high-performance charcoal made from compressed coconut shells. Designed for grilling, they provide a long-lasting, consistent heat with minimal smoke and ash. Free from additives or chemicals, these briquettes ensure a clean burn, preserving the natural flavors of food while being an environmentally responsible choice for barbecue enthusiasts.",
        category: "Charcoal",
        images: ["/img/BC1.JPG", "/img/BC2.JPG"]
    },
    { 
        label: "Coconut Shell Charcoal", 
        description: "Coconut shell charcoal is a sustainable, natural product made by carbonizing dried coconut shells. Renowned for its eco-friendly production, it burns cleanly with minimal smoke and ash. Commonly used in grilling, shisha, and industrial applications, it provides long-lasting, consistent heat and is free from harmful chemicals, making it a versatile and environmentally conscious choice.",
        category: "Charcoal",
        images: ["/img/DSCF3032.JPG", "/img/DSCF3027.JPG"]
    },
    { 
        label: "Shisha Coconut Briquettes", 
        description: "Shisha coconut briquettes are eco-friendly, high-quality charcoal made from compressed coconut shells. They are specifically designed for use in shisha or hookah, offering a clean and consistent burn with minimal ash and no harmful chemicals. Known for their long burn time and even heat distribution, these briquettes enhance the shisha experience by delivering pure flavor without overpowering smoke.",
        category: "Charcoal",
        images: ["/img/DSCF2897.JPG", "/img/DSCF2624.JPG", "/img/DSCF2898.JPG", "/img/DSCF2943.JPG"]
    },
    { 
        label: "BBQ Sawdust Briquettes", 
        description: "BBQ sawdust briquettes are eco-friendly charcoal made by compressing recycled sawdust into dense, high-performance blocks. Ideal for grilling, they offer consistent heat, a long burn time, and minimal smoke. Free from harmful chemicals, these briquettes ensure a clean and natural cooking experience while promoting sustainable waste utilization.",
        category: "Charcoal",
        images: ["/img/sawdust4.JPG", "/img/BS1.webp", "/img/BCVID.mp4"]
    },
    { 
        label: "Binchotan Charcoal", 
        description: "Binchotan charcoal, also known as white charcoal, is a high-quality, traditional Japanese charcoal made from hardwoods like oak. Renowned for its clean burn, high heat, and ability to enhance flavors, it is widely used in grilling. The wood is heated in a kiln at a low temperature (around 200–400°C) for several days to remove moisture and impurities. In the final stage, the temperature is rapidly increased to approximately 900°C before the charcoal is removed and quickly cooled using sand or ash. This high-temperature exposure creates a hard, white outer layer, giving Binchotan its unique structure, clean-burning properties, and long-lasting qualities.",
        category: "Charcoal",
        images: ["/img/produk1.JPG", "/img/produk2.JPG", "/img/video_binchotan.MP4", "/img/video_binchotan2.MP4"]
    },
    { 
        label: "Working Environment", 
        description: "Our factory provides a supportive and inclusive working environment, offering employment opportunities to men and women from local villages, including those who were previously unemployed. By empowering the community, we foster economic growth and skill development, creating a sustainable livelihood for our workers. The workplace prioritizes safety, fairness, and teamwork, reflecting our commitment to social responsibility and community welfare.",
        category: "Working Environment",
        images: ["/img/Gallery9.webp", "/img/Gallery10.webp", "/img/Gallery14.webp", "/img/Gallery15.webp", "/img/Gallery22.webp", "/img/Gallery23.webp", "/img/Gallery27.webp"]
    },
];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Factory");
    const [modalData, setModalData] = useState<GalleryItem | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const openModal = (item: GalleryItem) => {
        setModalData(item);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setModalData(null);
        setCurrentImageIndex(0);
    };

    const setImageIndex = (index: number) => setCurrentImageIndex(index);

    const filteredItems = galleryItems.filter((item) => item.category === selectedCategory);

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
            <Header active={"gallery"} />
            <BackgroundGhost />

            {/* Category Buttons */}
            <div className="w-full flex justify-center mt-12 gap-6">
                {["Factory", "Charcoal", "Working Environment"].map((category) => (
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
