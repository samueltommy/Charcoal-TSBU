export default function OurCertificate() {
    return (
        <section className="w-screen py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-[90rem] mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="bg-[#FFD646] rounded-2xl p-12 lg:p-16">
                        <div data-aos="fade-right" className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
                                Our Certificates
                            </h2>
                            <p className="text-lg text-black/70 font-medium">
                                Our factories operate under official licenses,
                                in addition to certifications for factories and products
                            </p>
                        </div>
                    </div>

                    {/* Certificates Grid */}
                    <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img 
                                className="w-full h-auto object-contain" 
                                src="./logo/carsurin_logo.png" 
                                alt="Carsurin Certificate"
                            />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img 
                                className="w-full h-auto object-contain" 
                                src="./logo/Seal_of_the_Ministry_of_Finance_of_the_Republic_of_Indonesia.png" 
                                alt="Ministry of Finance Certificate"
                            />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img 
                                className="w-full h-auto object-contain" 
                                src="./logo/pengayoman.png" 
                                alt="Pengayoman Certificate"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
