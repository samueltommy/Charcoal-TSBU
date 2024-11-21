'use client'
import { useState } from "react";
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Image from "next/image";
import Backround from "@/public/img/bg1.webp"
import Footer from "@/components/micro/footer";

interface GalleryItem {
    url: string,
    label: string
    category: string;
}
const galleryItems: GalleryItem[] = [
    { url: "/img/Gallery1.webp", label: "Factory Front View", category: "factory" },
    { url: "/img/Gallery3.webp", label: "Hardwood Charcoal", category: "charcoal" },
    { url: "/img/Gallery4.webp", label: "Coconut Shell Charcoal", category: "charcoal" },
    { url: "/img/Gallery5.webp", label: "Charcoal Burning Test", category: "charcoal" },
    { url: "/img/Gallery7.webp", label: "Hookah Shisha with Briquettes", category: "charcoal" },
    { url: "/img/Gallery9.webp", label: "Factory Working Environment", category: "working" },
    { url: "/img/Gallery10.webp", label: "Inside the Oven", category: "factory" },
    { url: "/img/Gallery14.webp", label: "Workers Photos", category: "working" },
    { url: "/img/Gallery18.webp", label: "Factory Inside View", category: "factory" },
    { url: "/img/Gallery19.webp", label: "Factory Inside View", category: "factory" },
    { url: "/img/Gallery21.webp", label: "Cube Charcoal Briquettes", category: "charcoal" },
    { url: "/img/Gallery23.webp", label: "Factory Working Environment", category: "working" },
    { url: "/img/Gallery24(1).webp", label: "Factory Inside View", category: "factory" },
    { url: "/img/Gallery25.webp", label: "Cube Charcoal Briquettes", category: "charcoal" },
    { url: "/img/Gallery26.webp", label: "Factory Working Environment", category: "working" },
    { url: "/img/Gallery27.webp", label: "Factory Working Environment", category: "working" }
  ];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>("factory");

    // Filter gallery items by selected category
    const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

    return(
        <>
            <Header active={"gallery"}/>
            <BackgroundGhost/>

            <div className="w-full flex justify-center mt-12 gap-6">
                <button
                className={`px-4 py-2 rounded ${selectedCategory === "factory" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedCategory("factory")}
                >
                Factory
                </button>
                <button
                className={`px-4 py-2 rounded ${selectedCategory === "charcoal" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedCategory("charcoal")}
                >
                Charcoal
                </button>
                <button
                className={`px-4 py-2 rounded ${selectedCategory === "working" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedCategory("working")}
                >
                Working Environment
                </button>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-12 mt-12">
                {filteredItems.map((item, index) => (
                    <div key={index} className="m-4">
                        <img
                            src={item.url}
                            width={200}
                            height={50}
                            alt="No image"
                            className="object-cover w-[14rem] min-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                        />
                        <h5 className="text-sm md:h5 text-center">
                            {item.label}
                        </h5>
                    </div>
                ))}

            </div>
            <Footer/>
        </>
    )
}
