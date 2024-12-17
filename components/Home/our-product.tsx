import {inter} from "@/app/api/util";
import Image from "next/image";
import cube from "@/public/shape/cube.svg";
import finger from "@/public/shape/finger.svg";
import flat from "@/public/shape/flat.svg";
import hexagon from "@/public/shape/hexagon.svg";
import briquettes from "@/public/img/briquettes.jpg";
import bichotan from "@/public/img/bichotan.jpg";
import pallet from "@/public/img/pallet.jpg";
import palm from "@/public/img/palm.webp";
import sawdust from "@/public/img/sawdust5.jpg";

export default function OurProduct() {
    return(
        <section className="py-20">
            <div className="max-w-[90rem] mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl h2 mb-8">
                        Our Products
                    </h2>
                    <div data-aos="fade-up" className="relative">
                        <div className="flex justify-center flex-row text-lg text-gray-600 bg-white p-8 rounded-2xl shadow-sm">
                            <p className={`text-6xl bg-[#FFD646] px-2 pt-2 mr-2 text-white`}>O</p>
                            <p className="max-w-screen-sm text-justify">
                                ur products are customized based on grade and specific requirements. We are dedicated to
                                ensuring the quality of our products through rigorous checks, starting from the raw materials
                                and continuing through every stage of production.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                    {[
                        {
                            icon: briquettes,
                            title: "Coconut Briquettes",
                            delay: "100"
                        },
                        {
                            icon: bichotan,
                            title: "Bichotan Charcoal",
                            delay: "200"
                        },
                        {
                            icon: pallet,
                            title: "Wood Pallet",
                            delay: "300"
                        },
                        {
                            icon: palm,
                            title: "Palm Shell",
                            delay: "400"
                        },
                        {
                            icon: sawdust,
                            title: "Sawdust Charcoal",
                            delay: "500"
                        }
                    ].map((product, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={product.delay}
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="bg-gray-50 rounded-xl p-6 mb-6 group-hover:bg-[#1C4225]/5 transition-all duration-300">
                                <Image
                                    src={product.icon}
                                    alt={product.title}
                                    className="w-20 h-20 mx-auto object-contain"
                                    priority={true}
                                    quality={50}
                                    loading="eager"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-[#1C4225] text-center group-hover:text-[#FFD646] transition-all duration-300">
                                {product.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

