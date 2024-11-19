'use client'
import Image, {StaticImageData} from "next/image";
import {usePathname} from "next/navigation"

import bg1 from "@/public/img/bg1.webp"
import bg2 from "@/public/img/bg2.webp"
import bg3 from "@/public/img/bg3.webp"
const bgImage:StaticImageData[] = [
    bg1,
    bg2,
    bg3
]
export default function BackgroundGhost() {
    const pathname = usePathname()
    return(
        <>
            <img
                src={bgImage[Math.floor(Math.random() * (bgImage.length))].src}
                alt="Hero Login Image"
                className={`absolute max-h-[100vh] md:max-h-[70vh] object fill min-w-full z-[-1] object-cover `}
                sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
            />
            {/*<Image*/}
            {/*    src={bgImage[Math.floor(Math.random() * (bgImage.length))]}*/}
            {/*    alt="Hero Image"*/}
            {/*    fill*/}
            {/*    className="object-cover max-h-[22rem] md:max-h-[32rem] z-[-1]"*/}
            {/*    sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw} "*/}
            {/*    priority={true}*/}
            {/*    placeholder="blur"*/}
            {/*    quality={50}*/}
            {/*/>*/}
            <div className="flex my-[5rem] md:my-[15rem] gap-2 flex-col items-center">
                <h1 className="h1  text-white "> {pathname.slice(1, 2).toUpperCase() + pathname.slice(2)}</h1>
                <h1 className="h4  text-white"><a href="/">Home</a> &gt; {pathname.slice(1)} </h1>
            </div>
        </>
    )
}
