'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";

import bg1 from "@/public/img/bg1.webp";
import bg2 from "@/public/img/bg2.webp";
import bg3 from "@/public/img/bg3.webp";

const bgImages = [bg1, bg2, bg3];

export default function BackgroundGhost() {
    const pathname = usePathname();
    const backgroundImage = bgImages[Math.floor(Math.random() * bgImages.length)];

    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-gray-900/50">
            <Image 
                src={backgroundImage} 
                alt="Background Image" 
                layout="fill" 
                objectFit="cover" 
                className="absolute inset-0 z-[-1] opacity-85" 
                priority
                quality={70}
            />
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white capitalize">
                    {pathname === "/" ? "Home" : pathname.slice(1).replace(/-/g, ' ')}
                </h1>
                <p className="text-xl text-gray-300 mt-2">
                    <a href="/" className="text-gray-200 hover:underline">Home</a> &gt; {pathname.slice(1).replace(/-/g, ' ')}
                </p>
            </div>
        </div>
    );
}
