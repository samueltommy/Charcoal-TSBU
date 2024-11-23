import Image from "next/image"

export default function WhyChooseUs() {
    return (
        <section className="w-screen py-24 bg-white">
            <div className="max-w-[90rem] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl h2 mb-6">
                        Why Choose Us
                    </h2>
                    <div data-aos="fade-up" className="flex justify-center gap-2">
                        <div className="h-1 w-16 bg-[#1C4225] rounded-full"></div>
                        <div className="h-1 w-4 bg-[#1C4225] rounded-full"></div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div data-aos="fade-up" data-aos-duration="300" 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="aspect-4/3 overflow-hidden">
                            <Image
                                src="/img/Illustration7.webp"
                                alt="Reliability"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl h3 mb-4">Reliability</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our products are customized based on grade and specific requirements.
                                We are dedicated to ensuring the quality of our products through rigorous checks,
                                starting from the raw materials and continuing through every stage of production.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="aspect-4/3 overflow-hidden">
                            <Image
                                src="/img/Illustration8.webp"
                                alt="Quality"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl h3 mb-4">Quality</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our unwavering commitment is to provide the utmost quality throughout our entire supply chain,
                                encompassing raw materials, manufacturing processes, production, and packaging.
                                This commitment is essential for building a sustainable business and fostering long-term relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
