'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import bg1 from "@/public/img/bg1.webp";
import bg2 from "@/public/img/bg2.webp";
import bg3 from "@/public/img/bg3.webp";
import product1 from "@/public/img/Sawdust_Package.jpg";
import product2 from "@/public/img/WhatsApp Image 2024-09-21 at 22.21.53_01f36e97.jpg";
import product4 from "@/public/img/DSCF2658.jpg";

const galleryImages = [bg1, bg2, product4];
const productImages = [bg3, product1, product2];

export default function BackgroundGhost() {
    const pathname = usePathname();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const images = pathname.includes('products') ? productImages : galleryImages;

    const nextSlide = useCallback(() => {
        if (!isPaused) {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }
    }, [isPaused, images.length]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000); // Changed to 8 seconds
        return () => clearInterval(timer);
    }, [nextSlide]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getPageTitle = useCallback(() => {
        if (pathname === "/") return "Home";
        return pathname.slice(1).replace(/-/g, ' ');
    }, [pathname]);

    return (
        <div 
            className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-gray-900/50"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <Image 
                src={images[currentIndex]} 
                alt="Background Image" 
                fill
                className="absolute inset-0 z-[-1] opacity-85 transition-all duration-1000 object-cover" 
                priority
                quality={70}
            />
            
            {/* Navigation Arrows */}
            <button 
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
                aria-label="Previous image"
            >
                ←
            </button>
            <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
                aria-label="Next image"
            >
                →
            </button>

            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white capitalize">
                    {getPageTitle()}
                </h1>
                {pathname !== "/" && (
                    <p className="text-xl text-gray-300 mt-2">
                        <Link href="/" className="text-gray-200 hover:underline">
                            Home
                        </Link>
                        <span className="mx-2">&gt;</span>
                        <span className="capitalize">{getPageTitle()}</span>
                    </p>
                )}
            </div>
        </div>
    );
}
