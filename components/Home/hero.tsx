import Image, {StaticImageData} from "next/image";
import Background from "@/public/img/bg1.webp";
import Link from "next/link";
import {inter} from "@/app/api/util";

import bg1 from "@/public/img/bg1.webp"
import bg2 from "@/public/img/bg2.webp"
import bg3 from "@/public/img/bg3.webp"
import Carousel, {CarouselItem} from "@/components/micro/carousel";
import {slickData} from "@/components/Home/production-prosess";
import ResponsiveCarousel from "@/components/micro/carousel/responsive";
export const bgImage:StaticImageData[] = [
    bg1,
    bg2,
    bg3
]
function Hero() {
    return (
        <section data-aos="fade-up" data-aos-delay="500" className="min-w-full md:p-6 relative min-h-[70vh] px-10 md:min-h-[110vh] flex flex-col md:flex-row  md:pl-32 md:items-center">
            <ResponsiveCarousel option="home"/>
            {/*<Image*/}
            {/*    src={bgImage[Math.floor(Math.random() * (bgImage.length))]}*/}
            {/*    alt="Hero Login Image"*/}
            {/*    fill*/}
            {/*    className="z-[-1] object-cover max-h-screen"*/}
            {/*    sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"*/}
            {/*    priority={true}*/}
            {/*    placeholder="blur"*/}
            {/*    quality={50}*/}
            {/*/>*/}
            <div data-aos="fade-up" data-aos-delay="600" className="mt-12 w-12/12 md:w-auto px-9 py-16 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#1C422580] to-[#1C4225E6] backdrop-blur-sm">
                <h4
                    className={` md:text-xl text-md py-2 font-bold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${inter.className}`}
                >
                    <span className="text-[#FFD646]">Premium Export Quality</span> </h4>
                <h1
                    className={`md:text-4xl text-2xl pt-2 font-extrabold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${inter.className}`}
                >
                    <span className="text-[#FFD646]">T</span>HE&nbsp;
                    <span className="text-[#FFD646]">B</span>EST&nbsp;
                    <span className="text-[#FFD646]">F</span>OR&nbsp;
                    <span className="text-[#FFD646]">C</span>HARCOAL&nbsp;
                    <span className="text-[#FFD646]">B</span>RIQUETTES,&nbsp;
                    <br/>
                    <span className="text-[#FFD646]">H</span>ARDWOOD&nbsp;
                    <span className="text-[#FFD646]">B</span>RIQUESTTES,&nbsp;
                    <span className="text-[#FFD646]">A</span>ND&nbsp;
                    <span className="text-[#FFD646]">B</span>ICHOTAN&nbsp;
                </h1>
                <br/>
                <div className="  antialiased drop-shadow-xl">
                        <button
                            className={` my-2 ml-10 px-6 py-2 rounded-lg text-xl text-black-50 font-bold bg-[#FFD646] ${inter.className} hover:text-white hover:bg-orange-400 hover:translate-x-1 transition-all duration-300`}
                        >
                            <span className="drop-shadow-md"> CHARCOAL NEEDS</span>
                        </button>
                </div>
                <br/>
                <h4
                    className={`text-slate-300 md:text-xl text-lg py-2 font-bold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${inter.className}`}
                >
                    <span className="text-[#FFD646]">PT. Tani Solusi Berjaya Utama</span> </h4>
            </div>


        </section>
    );
}

export default Hero;
