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
    images: string[]; // Array of images for the carousel
}
const galleryItems: GalleryItem[] = [
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

    const renderMedia = (src: string | undefined) => {
        if (!src) return null;
        
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

    const toggleGroupItemClasses = 
        "px-6 py-3 flex items-center justify-center bg-white text-gray-600 first:rounded-l last:rounded-r hover:bg-gray-50 focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-blue-500 focus:outline-none data-[state=on]:bg-blue-500 data-[state=on]:text-white transition-all duration-200";

    return (
        <>
            <Header active={"gallery"} />
            <BackgroundGhost />
            

            {/* Gallery Hero Section */}
            <div className="relative text-black mt-8 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl h1 mb-6 text-center">Our Gallery</h1>
                    <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
                        Explore our collection of high-quality charcoal products and get a glimpse into our modern production facility
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Modern Category Navigation */}
            <div className="container mx-auto px-4 mb-16">
                <div className="flex justify-center space-x-8 border-b border-gray-200">
                    <ToggleGroup.Root
                        className="inline-flex rounded-lg shadow-md bg-gray-100 mb-12"
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
                        {["Factory", "Charcoal", "Working Environment"].map((category) => (
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

                {/* Modern Masonry-style Grid */}
                <div className="relative mt-12">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                        {filteredItems.map((item, index) => (
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
            {modalData && (
                <div className="fixed inset-0 bg-white z-50 overflow-hidden">
                    <div className="h-full flex flex-col">
                        {/* Modal Header */}
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

                        {/* Modal Content */}
                        <div className="flex-1 flex">
                            {/* Main Image/Video Section */}
                            <div className="flex-1 bg-gray-50 flex items-center justify-center p-12">
                                <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                                    {modalData.images[currentImageIndex] && (
                                        modalData.images[currentImageIndex].endsWith('.MP4') ? (
                                            <video 
                                                src={modalData.images[currentImageIndex]} 
                                                controls
                                                className="max-w-full max-h-full w-auto h-auto object-contain"
                                            />
                                        ) : (
                                            <>
                                                {!imageLoaded && (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                                    </div>
                                                )}
                                                <img
                                                    src={modalData.images[currentImageIndex]}
                                                    alt={modalData.label}
                                                    className={`max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                                    onLoad={() => setImageLoaded(true)}
                                                />
                                            </>
                                        )
                                    )}

                                    {/* Navigation Arrows */}
                                    {modalData.images.length > 1 && (
                                        <>
                                            <button
                                                className="absolute left-4 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                                                onClick={() => setCurrentImageIndex((prev) => 
                                                    (prev - 1 + modalData.images.length) % modalData.images.length
                                                )}
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                className="absolute right-4 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                                                onClick={() => setCurrentImageIndex((prev) => 
                                                    (prev + 1) % modalData.images.length
                                                )}
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="w-[400px] border-l p-8 overflow-y-auto">
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                                    <p className="text-gray-600 leading-relaxed">{modalData.description}</p>
                                </div>

                                {/* Thumbnails */}
                                <div className="space-y-4">
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
                                                {src.endsWith('.MP4') ? (
                                                    <video src={src} className="w-full h-full object-cover" />
                                                ) : (
                                                    <img src={src} alt="" className="w-full h-full object-cover" />
                                                )}
                                            </button>
                                        ))}
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
