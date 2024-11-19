import Background from "@/public/background.webp";
import Image from "next/image";
import {BsCheckLg} from "react-icons/bs";
import {useRouter} from "next/navigation";
import {Separator} from "@/components/ui/separator";

export default function WhyChooseUs() {
    const router = useRouter()
    return(
        <>
            <div className="mt-10 min-h-screen flex flex-col place-items-center xl:place-items-start justify-center align-center">
                    <h3 className="h2 text-center w-full">
                        Why Choose Us
                    </h3>
                <div className="w-full flex flex-row gap-3 justify-center my-4 ">
                    <Separator className={"w-12 border-2 rounded-sm border-[#1C4225]"}/><Separator className={"w-2 border-2 rounded-sm border-[#1C4225]"}/>
                </div>
                {/*<div className="w-full xl:w-1/12 ">*/}
                {/*    <Image*/}
                {/*        src={Background}*/}
                {/*        alt="Hero Login Image"*/}
                {/*        className="object-cover xl:h-[80vh]"*/}
                {/*        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"*/}
                {/*        priority={true}*/}
                {/*        placeholder="blur"*/}
                {/*        quality={50}*/}
                {/*    />*/}

                {/*</div>*/}
                {/*<div className="pb-10 text-center xl:mt-[20vh] absolute w-[80vw] xl:w-[30rem] h-[18rem] xl:h-[20rem] ring-slate-200/70 rounded-[10px] bg-gradient-to-tr from-[#ccfd] to-[#ccfa] backdrop-blur-sm">*/}
                {/*    <h3 className="h3 mt-8 font-semibold">*/}
                {/*        Why Choose Us*/}
                {/*    </h3>*/}
                {/*    <h3 className="h2 text-left px-10 py-6 " >*/}
                {/*        Great Quality For Briquettes Product & Sustainable Business*/}
                {/*    </h3>*/}
                {/*    <button onClick={()=> router.push("/contact")} className=" group relative btn overflow-hidden rounded-lg bg-white shadow">*/}
                {/*        <div className="absolute inset-0 w-3 bg-slate-800 transition-all duration-[250ms] ease-out group-hover:w-full"/>*/}
                {/*        <span className="relative text-black group-hover:text-white">Get Quote</span>*/}
                {/*    </button>*/}

                {/*</div>*/}
                <div className="mt-0 md:mt-20  w-full relative">
                    <ul className="flex flex-col xl:flex-row mx-10 my-8 xl:m-0 xl:mr-10">
                        <li data-aos="fade-up" data-aos-duration="300" className="flex flex-col items-center xl:flex-row mx-12">
                            <img
                                src="/img/Illustration7.webp"
                                className="rounded-xl w-[16rem] object-cover p-0.5 m-5"
                                alt="img"/>
                            <div className="flex flex-col">
                                 <span className="h3 text-center">
                                    Reliability
                                </span>
                                <p >
                                    Our products are customized based on grade and specific requirements.
                                    We are dedicated to ensuring the quality of our products through rigorous checks,
                                    starting from the raw materials and continuing through every stage of production.
                                </p>
                            </div>
                        </li>

                        <li  data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center xl:flex-row mx-12">
                            <img
                                src="/img/Illustration8.webp"
                                className="rounded-lg w-[16rem] object-cover m-5"
                                alt="img"/>
                            <div className="flex  flex-col">
                                 <span className="h3 text-center">
                                    Quality
                                </span>
                                <p >
                                    Our unwavering commitment is to provide the utmost quality throughout our entire supply chain,
                                    encompassing raw materials, manufacturing processes, production, and packaging.
                                    This commitment is essential for building a sustainable business and fostering long-term relationships.
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}
