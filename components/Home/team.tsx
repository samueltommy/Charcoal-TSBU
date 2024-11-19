import Image from "next/image";
import Ayah from "@/public/img/Ayah1.webp"
import Adam from "@/public/img/Adam1.webp"
import {AiFillInstagram, AiFillFacebook, AiFillYoutube} from "react-icons/ai"
import {Separator} from "@/components/ui/separator";
import {FaWhatsapp} from "react-icons/fa6";
export default function OurTeam(){
    return(
        <>
            <div>
                <h1 className="text-center h1 mt-20">
                    Our Team
                </h1>
                <div className="flex flex-row gap-3 justify-center my-4 ">
                     <Separator className={"w-12 border-2 rounded-sm border-[#1C4225]"}/><Separator className={"w-2 border-2 rounded-sm border-[#1C4225]"}/>
                </div>
                {/*<h4 className="text-center text-slate-400">*/}
                {/*    Getting close with our team and owner Briquettes*/}
                {/*</h4>*/}
                <div className="m-auto min-w-full md:flex-row flex-col flex justify-center items-center">
                    <div className="team-box relative  mx-8 mt-8 w-[32rem] h-[32rem]">
                        <img
                            src={Ayah.src}
                            alt="Hero Login Image"
                            // fill
                            className="object-cover min-h-full w-full"
                            sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                            // priority={true}
                            // quality={50}
                        />
                        <div className="team-gradient text-white absolute inset-x-0 text-center bottom-0
                                        bg-gradient-to-b from-transparent to-gray-800
                                       ">

                            <div className="display relative bottom-[-6rem] team-social">
                                <h4 className="h4 ">
                                    Satriobudi “Tommy Van Blora”
                                </h4>
                                <div className="text-left mx-4 text-sm">
                                    Satriobudi, widely known as Tommy Van Blora, embarked on his entrepreneurial journey when he
                                    founded PT TSBU in 2018. An alumnus of the prestigious Bandung Institute of Technology, he
                                    majored in Electrical Engineering, a field that honed his analytical and problem-solving skills.
                                    However, his venture took him down a distinctive path, towards mastering the art and science of
                                    charcoal production.<br/>
                                    Under Tommy's leadership, PT TSBU has successfully expanded its market reach, exporting charcoal
                                    briquettes from Indonesia to the Middle East, Brazil, USA, and Europe. Tommy's dedication to quality
                                    and trust is recognized internationally, making PT TSBU a reputable name in the charcoal industry.
                                    His efforts showcase how a relentless pursuit of excellence and attention to detail can lead to
                                    significant accomplishments in the global market
                                </div>
                                <div className="flex flex-row justify-center ">
                                    <a href="./" className="bg-white rounded-full p-4 m-3.5">
                                        <AiFillFacebook className="text-4xl text-slate-700" />
                                    </a>
                                    <a href="./" className="bg-white rounded-full p-4 m-3.5">
                                        <FaWhatsapp  className="text-4xl text-slate-700" />
                                    </a>
                                </div>
                            </div>

                            <div className="team-name pb-12">
                                <h4 className="h6 ">
                                    Satriobudi “Tommy Van Blora”
                                </h4>
                                <p>
                                    Founder of TSBU
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="team-box relative  mx-8 mt-8 w-[32rem] h-[32rem]">
                        <img
                            src={Adam.src}
                            alt="Hero Login Image"
                            className="object-cover min-h-full w-full"
                            sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"

                        />
                        <div className="team-gradient text-white absolute inset-x-0 text-center bottom-0
                                        bg-gradient-to-b from-transparent to-gray-800
                                        pt-24">

                            <div className="display team-social">
                                <h4 className="h4 ">
                                    Adam “Rio” Baihaqi
                                </h4>
                                <div className="text-left mx-4 text-sm">
                                    Adam "Rio" Baihaqi, the co-founder of PT TSBU, holds both Bachelors and Masters degrees in
                                    Electrical Engineering from Bandung Institute of Technology. Unlike his father, who is immersed in
                                    production, Rio spearheads the marketing strategy of the company. Currently based in Japan, he's
                                    not only striving to penetrate the Asian charcoal briquettes market but also pursuing a PhD degree at
                                    Tokyo Institute of Technology. His dual role showcases a blend of academic pursuit and practical
                                    business strategy, aiming to bolster PT TSBU's market position in Asia.
                                </div>
                                <div className="flex flex-row justify-center ">
                                    <a href="./" className="bg-white rounded-full p-4 m-3.5">
                                        <AiFillFacebook className="text-4xl text-slate-700" />
                                    </a>
                                    <a href="https://wa.me/818064228470" className="bg-white rounded-full p-4 m-3.5">
                                        <FaWhatsapp  className="text-4xl text-slate-700" />
                                    </a>
                                </div>
                            </div>

                            <div className="team-name pb-12">
                                <h4 className="h6 ">
                                    Adam “Rio” Baihaqi
                                </h4>
                                <p>
                                    Co-Founder of TSBU
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
