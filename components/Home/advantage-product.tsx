import {inter} from "@/app/api/util";
import Image from "next/image";
import logo from "@/public/vercel.svg";
import {Separator} from "@/components/ui/separator";

export default function AdvantageProduct() {
    return(
        <>
            <div className={`text-center mt-10`}>
                {/*<p className={`${inter.className} text-slate-500 text-md font-bold`}>Fueling the Future: Clean Burn, Longer Lasting, Eco-Friendly Briquettes</p>*/}
                <h2 data-aos="fade-up" className={`h2 mb-4 `}>The Advantages Of Our Product</h2>
                <div data-aos="fade-up" className="flex flex-row gap-3 justify-center my-4 ">
                    <Separator className={"w-12 border-2 rounded-sm border-[#1C4225]"}/><Separator className={"w-2 border-2 rounded-sm border-[#1C4225]"}/>
                </div>
                <div data-aos="fade-up" className="flex justify-center flex-row">
                    <p className={`md:text-lg max-w-screen-sm text-center`}>
                        Fueling the Future: Clean Burn, Longer Lasting, Eco-Friendly Briquettes
                        <br/>
                        {/*<span className={`font-bold`}> Indonesia</span>*/}
                    </p>
                </div>

                <div data-aos="fade-up" className="w-full md:w-11/12 px-2 pt-10 md:m-auto grid grid-cols-2 md:grid-cols-3 gap-[1rem] md:gap-[8rem]  flex-wrap justify-center">
                    {["Smoke Less","Odor Less",
                        "FREE CHEMICALS & TOXIC","QUICK IGNITION TIME","100% COCONUT SHELL","LONG BURNING TIME",].map((obj,ind)=>(
                        <div  key={ind} className="border-2 box pt-[4rem] w-[10rem] md:w-[14rem] h-[10rem]">
                            <p className=" font-bold">
                                {obj.toUpperCase()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
