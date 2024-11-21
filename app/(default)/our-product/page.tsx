'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";

interface ourProductSpec {
    title: string;
    spec: { title: string; item: { specTitle: string; specDec: string }[] }[];
    image: { url: string; title: string }[];
}

export default function OurProduct() {
    const produc: ourProductSpec[] = [
        {
            title: "Shisha/Hookah Briquettes",
            spec: [
                {
                    title: "Product Specification",
                    item: [
                        { specTitle: "Moisture", specDec: ": 5%" },
                        { specTitle: "Ash Content", specDec: ": 2%" },
                        { specTitle: "Fix Carbon", specDec: ": 85%" },
                        { specTitle: "Calorific Value", specDec: ": 8000 Kcal" },
                        { specTitle: "Burning Time", specDec: ": 2 Hours" },
                    ],
                },
            ],
            image: [{ url: "/img/Shisha.webp", title: "Tani Solusi Berjaya Utama" }],
        },
        {
            title: "Barbecue Briquettes",
            spec: [
                {
                    title: "Product Specification",
                    item: [
                        { specTitle: "Moisture", specDec: ": 5%" },
                        { specTitle: "Ash Content", specDec: ": 4-10%" },
                        { specTitle: "Fix Carbon", specDec: ": 85%" },
                        { specTitle: "Calorific Value", specDec: ": 8500 Kcal" },
                        { specTitle: "Burning Time", specDec: ": 5 Hours" },
                    ],
                },
            ],
            image: [{ url: "/img/BBq.webp", title: "Tani Solusi Berjaya Utama" }],
        },
        {
            title: "Hardwood/Lump Charcoal",
            spec: [
                {
                    title: "Product Specification",
                    item: [
                        { specTitle: "Shape", specDec: ": Lump" },
                        { specTitle: "Size", specDec: ": 5-20 Cm" },
                        { specTitle: "Burning Time", specDec: ": 3 Hours" },
                    ],
                },
            ],
            image: [{ url: "/img/Hardwood.webp", title: "Tani Solusi Berjaya Utama" }],
        },
    ];

    return (
        <>
            <Header active={"our-product"} />
            <BackgroundGhost />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12 mt-10">
                {produc.map((obj, index) => (
                    <div key={index} className="product-card text-center">
                        {/* Image with Overlay Title */}
                        {obj.image.map((img, imgIndex) => (
                            <div
                                key={imgIndex}
                                className="relative group overflow-hidden border border-gray-200 rounded-lg shadow-lg"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="object-cover w-full h-64"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {obj.title}
                                </div>
                            </div>
                        ))}

                        {/* Specifications Section */}
                        <div className="mt-4">
                            <h4 className="font-bold text-lg">Specifications</h4>
                            <ul className="text-sm text-left list-disc list-inside mt-2">
                                {obj.spec[0].item.map((spec, specIndex) => (
                                    <li key={specIndex}>
                                        <span className="font-semibold">{spec.specTitle}</span>
                                        <span>{spec.specDec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}
