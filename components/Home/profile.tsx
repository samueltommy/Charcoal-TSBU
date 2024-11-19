import Image from "next/image"
import {inter} from "@/app/api/util";
import {BsCheckLg, BsDot} from "react-icons/bs";
import {useRouter} from "next/navigation";
import ResponsiveCarousel from "@/components/micro/carousel/responsive";

export default function Profile(){
    const router = useRouter()
    return(
        <>
            <div className="md:grid relative top-[-12rem] md:top-0 md:grid-cols-2 md:grid-rows-1 md:items-center justify-center md:min-h-[60vh]">
                <div data-aos="fade-right" data-aos-duration="400" className=" w-full h-full" >
                    <div className="mt-20 md:m-16 w-full md:w-10/12">
                        <ResponsiveCarousel className="max-h-4/12" option="factory"/>
                    </div>
                    {/*<Image*/}
                    {/*    src="/img/logo.webp"*/}
                    {/*    height={100}*/}
                    {/*    width={300}*/}
                    {/*    quality={50}*/}
                    {/*    alt="Hero"*/}
                    {/*    className="object-contain w-auto h-auto"*/}
                    {/*/>*/}
                </div>
                <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="400" className="md:px-0 px-4 flex-col grow  text-center md:text-left ">
                    <h2 className={`h2  justify-center mb-8`}>
                        Pure Charcoal, Premium Choice
                    </h2>
                    <p className={`${inter.className} text-md mr-4 mb-8`}>
                        PT. Tani Solusi Berjaya Utama is a leading charcoal briquette factory specializing in the production
                        and export of high-quality coconut charcoal briquettes. With extensive experience in crafting
                        premium charcoal briquettes, our factory is situated in Grobogan, Central Java, Indonesia.
                        <br/><br/>
                        We offer two primary types of charcoal briquettes tailored for Shisha, Hookah, and Barbecue
                        applications, with the flexibility to meet various grades and custom requirements.
                        <br/><br/>
                        Since our establishment in 2018, we've garnered vast experience and have had the privilege to
                        export our premium charcoal briquettes to esteemed markets including the USA, Middle East,
                        Europe, and Brazil.
                    </p>

                    <ul>
                        <li className="flex flex-row">
                            <BsDot className="rounded-full text-3xl"/> 100% Coconut shell materials
                        </li>
                        <li className="flex flex-row" >
                            <BsDot className="rounded-full text-3xl"/> Smokeless, odorless, low ash content
                        </li>
                        <li className="flex flex-row" >
                            <BsDot className="rounded-full text-3xl"/> Long burning time, quick ignition time
                        </li>
                    </ul>
                    <button onClick={() => router.push('/about')} className="btn my-8 text-white bg-[#FFD646] hover:bg-green-700">
                        Know More
                    </button>

                </div>
            </div>
        </>
    )
}
