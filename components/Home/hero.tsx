import dynamic from 'next/dynamic'
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
import {MdMailOutline} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa6";


export const bgImage:StaticImageData[] = [
    bg1,
    bg2,
    bg3
]

function Hero() {
    const WhatsAppIcon = dynamic(() => Promise.resolve(FaWhatsapp), { ssr: false })
    const MailIcon = dynamic(() => Promise.resolve(MdMailOutline), { ssr: false })

    return (
        <section 
            data-aos="fade-up" 
            data-aos-delay="500" 
            className="relative min-h-screen w-full flex items-end justify-start px-4 md:px-10 lg:px-32 pb-32"
        >
            <ResponsiveCarousel option="home"/>

            <div 
                data-aos="fade-up" 
                data-aos-delay="600" 
                className="max-w-2xl w-full p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-[#1C422590] to-[#1C4225E6] backdrop-blur-md shadow-xl"
            >
                <span className={`inline-block text-[#FFD646] text-base md:text-lg font-bold mb-3 ${inter.className}`}>
                    Premium Export Quality
                </span>

                <h1 className={`text-2xl md:text-4xl font-extrabold leading-tight mb-6 text-white ${inter.className}`}>
                    The Best For 
                    <span className="text-[#FFD646]"> C</span>oconut
                    <span className="text-[#FFD646]"> B</span>riquettes,
                    <span className="text-[#FFD646]"> B</span>inchotan
                    <span className="text-[#FFD646]"> C</span>harcoal,
                    <span className="text-[#FFD646]"> W</span>ood 
                    <span className="text-[#FFD646]"> P</span>allet, and
                    <span className="text-[#FFD646]"> C</span>oconut
                    <span className="text-[#FFD646]"> S</span>hell
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link href="/our-product" 
                        className={`
                            px-6 py-2.5 
                            rounded-full 
                            text-black 
                            font-bold 
                            text-base
                            bg-[#FFD646] 
                            hover:bg-orange-400 
                            hover:text-white 
                            transition-all 
                            duration-300 
                            shadow-lg
                            text-center
                            ${inter.className}
                        `}
                    >
                        View Products
                    </Link>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/20">
                    <h4 className={`text-[#FFD646] text-lg md:text-xl font-bold ${inter.className}`}>
                        PT. Tani Solusi Berjaya Utama
                    </h4>
                    <div className="flex gap-4">
                        <Link href="https://wa.me/818064228470" 
                            className="text-white hover:text-[#FFD646] transition-all duration-300">
                            <WhatsAppIcon size={20} />
                        </Link>
                        <Link href="mailto:adamsatrio@tsbu.co.id"
                            className="text-white hover:text-[#FFD646] transition-all duration-300">
                            <MailIcon size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
