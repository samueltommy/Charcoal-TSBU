import {inter} from "@/app/api/util";
import Image from "next/image";
import cube from "@/public/shape/cube.svg";
import finger from "@/public/shape/finger.svg";
import flat from "@/public/shape/flat.svg";
import hexagon from "@/public/shape/hexagon.svg";

export default function OurProduct() {
    return(
        <>
            <div className={`text-center mt-18 mx-2 md:mt-28`}>
                <h2 data-aos="fade-up" className={`h2 mb-4 `}>Our Product</h2>
                <div data-aos="fade-up" className="flex justify-center flex-row">
                    <p className={`text-5xl bg-[#FFD646] px-2 pt-2 mr-2 text-white`}>O</p>
                    <p className={` max-w-screen-sm text-justify`}>
                        ur products are customized based on grade and specific requirements. We are dedicated to
                        ensuring the quality of our products through rigorous checks, starting from the raw materials
                        and continuing through every stage of production.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center md:gap-28 gap-2">
                    <div data-aos="fade-up" data-aos-delay="100" className="m-8 grid grid-rows-2">
                        <Image
                            src={cube}
                            alt="Product"
                            height={100}
                            width={100}
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Cube
                        </h4>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="m-8 grid grid-rows-2">
                        <Image
                            src={flat}
                            alt="Product"
                            className="w-[100px] mt-6 h-[50px] object-fill"
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Flat
                        </h4>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="m-8 align-center justify-center grid grid-rows-2">
                        <Image
                            src={finger}
                            alt="Product"
                            className="w-20 h-20"
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Finger
                        </h4>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="m-8 align-center justify-center grid grid-rows-2">
                        <Image
                            src={hexagon}
                            alt="Product"
                            className="w-20 h-20"
                            priority={true}
                            quality={50}
                        />
                        <h4 className="h4">
                            Hexagon
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}
