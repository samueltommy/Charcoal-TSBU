'use client'
import { useState } from "react";
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface GalleryItem {
    label: string;
    description: string;
    category: string;
    images: string[];
    videos?: {
        src: string;
        thumbnail: string;
    }[];
}

const galleryItems: GalleryItem[] = [
    { 
        label: "Coconut Briquette Factory Profile", 
        description: "A short video for our Coconut Briquette Factory",
        category: "Factory",
        images: [], // No images for this item
        videos: [{ src: "/videos/Company Profile Video.MP4", thumbnail: "/img/video_thumb.webp" }] // Move MP4 files here
    },
    { 
        label: "Factory Front View", 
        description: "Here is the front view of the charcoal factory, showcasing a corrugated metal roof, green and gray painted walls.",
        category: "Factory",
        images: ["/img/Factory2.webp", "/img/DSCF3052.JPG"]
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
        label: "Sawdust Factory", 
        description: "At Sawdust Briquette Factory, we utilize three key components to produce high-quality briquettes: <br> • Raw Sawdust Storage: This keeps our hardwood sawdust (Mahoni & Bengkirai) dry and ready for processing.<br>• Sawdust Compressor: This compresses raw sawdust into hexagonal blocks.<br>• Sawdust Kiln: Where the blocks are carbonized into charcoal.",
        category: "Factory",
        images: [],
        videos: [{ src: "/videos/Sawdust_Factory.mp4", thumbnail: "/img/Screenshot 2025-04-21 230946.png" }]
    },
    { 
        label: "Raw Sawdust Storage", 
        description: "Our raw sawdust storage is designed to securely hold high-quality sawdust sourced from our wood factory partners. The sawdust, primarily from durable hardwoods like Mahoni and Bengkirai, is kept dry and free from contaminants to ensure optimal briquette production. Proper ventilation and moisture control are maintained to preserve the material’s quality, making it ideal for efficient and high-density sawdust briquettes.",
        category: "Factory",
        images: [],
        videos: [
            { src: "/videos/Sawdust_Material3.mp4", thumbnail: "/img/Screenshot 2025-04-21 230749.png" },
            { src: "/videos/Sawdust_Material.mp4", thumbnail: "/img/Screenshot 2025-04-21 230735.png" }
        ]
    },
    { 
        label: "Sawdust Briquesttes Compressor", 
        description: "Our sawdust compressor machine efficiently compacts raw sawdust into dense hexagonal blocks, ideal for further carbonization. Designed for high-pressure compression, it ensures uniform shape and density. This machine enhances the briquette-making process by producing high-quality, compact sawdust blocks ready for carbonization into premium charcoal products.",
        category: "Factory",
        images: [],
        videos: [
            { src: "/videos/Sawdust_Compressor5.mp4", thumbnail: "/img/Screenshot 2025-04-21 230816.png" },
            { src: "/videos/Sawdust_Compressor6.mp4", thumbnail: "/img/Screenshot 2025-04-21 230841.png" },
            { src: "/videos/Sawdust_Compressor.mp4", thumbnail: "/img/Screenshot 2025-04-21 230801.png" }
        ]
    },
    { 
        label: "Sawdust Kiln", 
        description: "Our Sawdust Kiln is designed for the carbonization process, transforming compressed sawdust blocks into high-quality charcoal. The process takes approximately four days, reaching peak temperatures of 700°C, followed by a one-week cooldown period. This controlled heating and cooling ensure efficient carbonization, producing durable and high-energy briquettes.",
        category: "Factory",
        images: ["/img/Sawdust_Kiln2.jpg", "/img/Sawdust_Kiln3.JPG"],
        videos: [{ src: "/videos/Sawdust_Kiln_Video3.mp4", thumbnail: "/img/Screenshot 2025-04-21 230913.png" }]
    },
    { 
        label: "Sawdust Briquette Storage", 
        description: "Our Sawdust Briquette Storage is where finished briquettes are stored and categorized based on quality. This ensures proper organization and quality control before packaging. The storage area keeps the briquettes dry and in optimal condition, ready for distribution.",
        category: "Factory",
        images: ["/img/Sawdust_Storage4.JPG", "/img/Sawdust_Storage5.JPG"],
        videos: [{ src: "/videos/Sawdust_Storage_Video.mp4", thumbnail: "/img/Screenshot 2025-04-21 230930.png" }]
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
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
        return (
            <div 
                className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        );
    };

    const renderMedia = (item: GalleryItem, index: number) => {
        if (item.videos && index >= item.images.length) {
            return (
                <video
                    key={item.videos[index - item.images.length].src}
                    controls
                    autoPlay
                    className="max-w-full max-h-[60vh] rounded-lg shadow-lg"
                >
                    <source 
                        src={item.videos[index - item.images.length].src} 
                        type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                </video>
            );
        }

        return (
            <>
                {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <img 
                    src={item.images[index]} 
                    alt={item.label}
                    className={`w-auto h-auto max-w-full max-h-[60vh] object-contain rounded-md shadow-sm transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                />
            </>
        );
    };

    const toggleGroupItemClasses = 
        "px-8 py-4 flex items-center justify-center text-sm font-medium tracking-wide bg-white text-gray-600 first:rounded-l-xl last:rounded-r-xl hover:bg-gray-50 focus:z-10 focus:outline-none data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95";

    return (
        <>
            <Header active={"gallery"} />
            <BackgroundGhost />

            {/* Gallery Hero Section */}
            <div className="relative text-black mt-8 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl h1 mb-6 text-center">Our Gallery</h1>
                    <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
                    Explore our collection of our production facility
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Modern Category Navigation */}
            <div className="container mx-auto px-4 mb-16">
                <div className="flex justify-center">
                    <div className="bg-gray-100/50 p-1.5 rounded-xl shadow-lg backdrop-blur-sm">
                        <ToggleGroup.Root
                            className="inline-flex rounded-xl bg-white/80 shadow-sm"
                            type="single"
                            defaultValue="Factory"
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
                            {["Factory", "Working Environment"].map((category) => (
                                <ToggleGroup.Item
                                    key={category}
                                    className={toggleGroupItemClasses}
                                    value={category}
                                    aria-label={`${category} category`}
                                >
                                    {category}
                                </ToggleGroup.Item>
                            ))}
                        </ToggleGroup.Root>
                    </div>
                </div>

                {/* Modern Masonry-style Grid */}
                <div className="relative mt-12">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                        {filteredItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="group transform transition-all duration-300 hover:translate-y-[-4px]"
                            >
                                <div 
                                    className="cursor-pointer overflow-hidden rounded-xl shadow-lg mb-6 relative aspect-square sm:aspect-[4/3]"
                                    onClick={() => setModalData(item)}
                                >
                                    {item.images.length > 0 ? (
                                        <img
                                            src={item.images[0]}
                                            alt={item.label}
                                            className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : item.videos && item.videos.length > 0 ? (
                                        <div className="relative w-full h-full">
                                            <img
                                                src={item.videos[0].thumbnail}
                                                alt={item.label}
                                                className="absolute w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <h3 className="text-xl font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                                    {item.label}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalData && (
                <div className="fixed inset-0 bg-black/50 z-50 p-2 sm:p-4 overflow-hidden flex items-center justify-center">
                    <div className="bg-white rounded-xl w-[98%] sm:w-[95%] max-w-[1200px] h-[95vh] sm:h-[90vh] overflow-hidden shadow-2xl">
                        <div className="flex flex-col h-full">
                            {/* Modal Header */}
                            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b flex items-center justify-between shrink-0">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate pr-4">{modalData.label}</h2>
                                <button
                                    onClick={() => {
                                        setModalData(null);
                                        setImageLoaded(false);
                                    }}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="flex flex-col md:flex-row flex-1 min-h-0">
                                {/* Main Image/Video Section */}
                                <div className="flex-1 bg-gray-50 p-3 sm:p-4 md:p-6 min-h-0">
                                    <div className="relative w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                                        <div className="relative w-[95%] h-[95%] flex items-center justify-center">
                                            {renderMedia(modalData, currentImageIndex)}

                                            {/* Navigation Arrows */}
                                            {modalData.images.length + (modalData.videos?.length || 0) > 1 && (
                                                <>
                                                    <button
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
                                                        onClick={() => {
                                                            setImageLoaded(false);
                                                            setCurrentImageIndex((prev) => 
                                                                (prev - 1 + modalData.images.length + (modalData.videos?.length || 0)) % (modalData.images.length + (modalData.videos?.length || 0))
                                                            );
                                                        }}
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors"
                                                        onClick={() => {
                                                            setImageLoaded(false);
                                                            setCurrentImageIndex((prev) => 
                                                                (prev + 1) % (modalData.images.length + (modalData.videos?.length || 0))
                                                            );
                                                        }}
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="w-full md:w-[400px] border-t md:border-t-0 md:border-l flex flex-col h-[40vh] md:h-full">
                                    <div className="flex flex-col h-full overflow-hidden">
                                        <div className="p-4 sm:p-6 overflow-y-auto">
                                            <div className="mb-6 text-center md:text-left">
                                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Description</h3>
                                                {renderDescription(modalData.description)}
                                            </div>

                                            {/* Thumbnails */}
                                            <div className="text-center md:text-left">
                                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Gallery</h3>
                                                <div className="grid grid-cols-4 sm:grid-cols-3 gap-2 max-w-[400px] mx-auto md:mx-0">
                                                    {/* Images */}
                                                    {modalData.images.length > 0 && modalData.images.map((src, idx) => (
                                                        <button
                                                            key={`img-${idx}`}
                                                            onClick={() => {
                                                                setImageLoaded(false);
                                                                setCurrentImageIndex(idx);
                                                            }}
                                                            className={`aspect-square rounded-md overflow-hidden ${
                                                                currentImageIndex === idx ? 'ring-2 ring-blue-500' : ''
                                                            }`}
                                                        >
                                                            <div className="w-full h-full relative">
                                                                <img 
                                                                    src={src} 
                                                                    alt="" 
                                                                    className="absolute inset-0 w-full h-full object-cover hover:opacity-90 transition-opacity" 
                                                                />
                                                            </div>
                                                        </button>
                                                    ))}
                                                    
                                                    {/* Videos */}
                                                    {modalData.videos?.map((video, idx) => (
                                                        <button
                                                            key={`video-${idx}`}
                                                            onClick={() => {
                                                                setImageLoaded(false);
                                                                setCurrentImageIndex(modalData.images.length + idx);
                                                            }}
                                                            className={`aspect-square rounded-md overflow-hidden relative ${
                                                                currentImageIndex === modalData.images.length + idx ? 'ring-2 ring-blue-500' : ''
                                                            }`}
                                                        >
                                                            <div className="w-full h-full relative">
                                                                <img 
                                                                    src={video.thumbnail}
                                                                    alt="Video thumbnail"
                                                                    className="absolute inset-0 w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
                                                                    <svg className="w-8 h-8 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
