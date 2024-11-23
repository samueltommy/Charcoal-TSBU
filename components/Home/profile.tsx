import Image from "next/image"
import {inter} from "@/app/api/util";
import {BsCheckLg} from "react-icons/bs";
import {useRouter} from "next/navigation";
import ResponsiveCarousel from "@/components/micro/carousel/responsive";

// Move this outside component to prevent recreation on each render
const features = [
    '100% Coconut shell materials',
    'Smokeless, odorless, low ash content',
    'Long burning time, quick ignition time',
    'Premium export quality'
]

export default function Profile() {
    const router = useRouter()
    
    return (
        <section className="w-full px-4 py-16 md:py-24 bg-gray-50">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Image Section */}
                    <div data-aos="fade-right" data-aos-duration="400" className="w-full md:w-7/12 lg:w-3/5">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <ResponsiveCarousel option="factory" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="400" 
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <h2 className={`text-4xl md:text-5xl h2 leading-tight`}>
                            Pure Charcoal, Premium Choice
                        </h2>

                        <div className={`${inter.className} text-gray-600 space-y-6 text-lg`}>
                            <p>
                                PT. Tani Solusi Berjaya Utama is a leading coconut briquetts, bichotan charcoal, wood pallet, 
                                and coconut shell factory specializing in the production and export of high-quality products. 
                                With extensive experience in crafting premium charcoal products, our factory is situated in 
                                Grobogan, Central Java, Indonesia.
                            </p>
                            <p>
                                We offer four main products, coconut briquettes, bichontan charcoal, wood pallet, and coconut 
                                shell, with the flexibility to meet various grades and custom requirements.
                            </p>
                            <p>
                                Since our establishment in 2018, we've garnered vast experience and have had the privilege to
                                export our premium charcoal products to esteemed markets including the USA, Middle East,
                                Europe, and Brazil.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                                    <div className="bg-[#1C4225] p-2 rounded-full">
                                        <BsCheckLg className="text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={() => router.push('/about')} 
                            className="inline-flex items-center px-8 py-4 rounded-full bg-[#1C4225] text-white hover:bg-[#FFD646] hover:text-black transition-all duration-300 text-lg font-semibold"
                        >
                            Discover More
                            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
