import Image from "next/image";
import Link from 'next/link'
import Ayah from "@/public/img/Ayah1.webp"
import Adam from "@/public/img/Adam1.webp"
import {Separator} from "@/components/ui/separator";
import {FaWhatsapp} from "react-icons/fa6";
export default function OurTeam(){
    return(
        <>
            <div>
                <h1 className="text-center h1 mt-20">
                    Our Team
                </h1>
                <div className="flex flex-row gap-3 justify-center my-4">
                    <Separator className={"w-12 border-2 rounded-sm border-[#1C4225]"}/><Separator className={"w-2 border-2 rounded-sm border-[#1C4225]"}/>
                </div>
                
                {/* Updated container classes for better centering */}
                <div className="container mx-auto px-4 md:px-8 max-w-[90rem]">
                    {/* Team member cards container with improved centering */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                        {/* Tommy's card */}
                        <div className="team-box relative w-full md:w-[32rem] h-[24rem] md:h-[32rem] overflow-hidden rounded-xl">
                            <img
                                src={Ayah.src}
                                alt="Tommy Van Blora"
                                className="object-cover min-h-full w-full"
                                sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                            />
                            <div className="team-gradient text-white absolute inset-0 flex flex-col justify-center">
                                {/* Black overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
                                
                                {/* Content Section */}
                                <div className="display px-4 md:px-8 py-4 md:py-6 team-social flex flex-col backdrop-blur-sm bg-black/20 relative z-10">
                                    <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-wider text-center">
                                        Satriobudi "Tommy Van Blora"
                                    </h4>
                                    
                                    <div className="text-left space-y-2 md:space-y-3 text-[0.75rem] md:text-[0.8rem] leading-relaxed text-gray-100/95 mb-3 md:mb-4">
                                        <p>
                                            Satriobudi, widely known as Tommy Van Blora, embarked on his entrepreneurial journey when he
                                            founded PT TSBU in 2018. An alumnus of the prestigious Bandung Institute of Technology, he
                                            majored in Electrical Engineering, a field that honed his analytical and problem-solving skills.
                                            However, his venture took him down a distinctive path, towards mastering the art and science of
                                            charcoal production.
                                        </p>
                                        <p>
                                            Under Tommy's leadership, PT TSBU has successfully expanded its market reach, exporting charcoal
                                            briquettes from Indonesia to the Middle East, Brazil, USA, and Europe. Tommy's dedication to quality
                                            and trust is recognized internationally, making PT TSBU a reputable name in the charcoal industry.
                                            His efforts showcase how a relentless pursuit of excellence and attention to detail can lead to
                                            significant accomplishments in the global market.
                                        </p>
                                    </div>

                                    <div className="flex justify-center px-2 md:px-4 mt-auto">
                                        <Link 
                                            href="https://wa.me/628161166600" 
                                            className="bg-[#25D366] text-white py-2.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#1EA952] transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-sm border border-white/10"
                                        >
                                            <FaWhatsapp className="text-lg" />
                                            <span className="font-medium text-sm">Contact via WhatsApp</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Bottom Name Tag */}
                                <div className="absolute bottom-0 inset-x-0 py-3 md:py-5 px-4 md:px-8 bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-sm team-name transition-all duration-300 border-t border-white/10 z-20">
                                    <div className="max-w-sm mx-auto text-center">
                                        <h4 className="text-lg md:text-xl font-semibold tracking-wide text-white">
                                            Satriobudi "Tommy Van Blora"
                                        </h4>
                                        <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2 font-medium tracking-wider uppercase">
                                            Founder of TSBU
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rio's card */}
                        <div className="team-box relative w-full md:w-[32rem] h-[24rem] md:h-[32rem] overflow-hidden rounded-xl">
                            <img
                                src={Adam.src}
                                alt="Adam Rio Baihaqi"
                                className="object-cover min-h-full w-full"
                                sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                            />
                            <div className="team-gradient text-white absolute inset-0 flex flex-col justify-center">
                                {/* Black overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
                                
                                {/* Content Section */}
                                <div className="display px-4 md:px-8 py-4 md:py-6 team-social flex flex-col backdrop-blur-sm bg-black/20 relative z-10">
                                    <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-wider text-center">
                                        Adam "Rio" Baihaqi
                                    </h4>
                                    
                                    <div className="text-left space-y-2 md:space-y-3 text-[0.75rem] md:text-[0.8rem] leading-relaxed text-gray-100/95 mb-3 md:mb-4">
                                        <p>
                                            Adam "Rio" Baihaqi, the co-founder of PT TSBU, holds both Bachelors and Masters degrees in
                                            Electrical Engineering from Bandung Institute of Technology. Unlike his father, who is immersed in
                                            production, Rio spearheads the marketing strategy of the company.
                                        </p>
                                        <p>
                                            Currently based in Japan, he's not only striving to penetrate the Asian charcoal briquettes market but also pursuing a PhD degree at
                                            Tokyo Institute of Technology. His dual role showcases a blend of academic pursuit and practical
                                            business strategy, aiming to bolster PT TSBU's market position in Asia.
                                        </p>
                                    </div>

                                    <div className="flex justify-center px-2 md:px-4">
                                        <Link 
                                            href="https://wa.me/818064228470" 
                                            className="bg-[#25D366] text-white py-2.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#1EA952] transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-sm border border-white/10"
                                        >
                                            <FaWhatsapp className="text-lg" />
                                            <span className="font-medium text-sm">Contact via WhatsApp</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Bottom Name Tag */}
                                <div className="absolute bottom-0 inset-x-0 py-3 md:py-5 px-4 md:px-8 bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-sm team-name transition-all duration-300 border-t border-white/10 z-20">
                                    <div className="max-w-sm mx-auto text-center">
                                        <h4 className="text-lg md:text-xl font-semibold tracking-wide text-white">
                                            Adam "Rio" Baihaqi
                                        </h4>
                                        <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2 font-medium tracking-wider uppercase">
                                            Co-Founder of TSBU
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
