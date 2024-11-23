'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import { useState } from "react";

interface ourProductSpec {
    category: string;
    title: string;
    spec: { title: string; item: { specTitle: string; specDec: string }[] }[];
    image: { url: string; title: string }[];
}

export default function OurProduct() {
    const products: ourProductSpec[] = [
        {
            category: "Coconut Briquettes",
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
            category: "Coconut Briquettes",
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
            category: "Coconut Briquettes",
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
        {
            category: "Bichotan Charcoal",
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
        {
            category: "Wood Pallet",
            title: "Wood Pallet Example",
            spec: [
                {
                    title: "Product Specification",
                    item: [
                        { specTitle: "Material", specDec: ": Wood" },
                        { specTitle: "Weight", specDec: ": 20 Kg" },
                    ],
                },
            ],
            image: [{ url: "/img/WoodPallet.webp", title: "Tani Solusi Berjaya Utama" }],
        },
        {
            category: "Coconut Shell",
            title: "Coconut Shell Example",
            spec: [
                {
                    title: "Product Specification",
                    item: [
                        { specTitle: "Size", specDec: ": Small to Medium" },
                        { specTitle: "Usage", specDec: ": Charcoal Production" },
                    ],
                },
            ],
            image: [{ url: "/img/CoconutShell.webp", title: "Tani Solusi Berjaya Utama" }],
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("Coconut Briquettes");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
    );

    return (
        <>
            <Header active={"our-product"} />
            <BackgroundGhost />

            {/* Buttons to select category */}
            <div className="flex justify-center space-x-4 mt-2">
                {["Coconut Briquettes", "Bichotan Charcoal", "Wood Pallet", "Coconut Shell"].map(
                    (category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 font-semibold text-white rounded ${
                                selectedCategory === category
                                    ? "bg-blue-600"
                                    : "bg-gray-500 hover:bg-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    )
                )}
            </div>

            {/* Display products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12 mt-10">
                {filteredProducts.map((product, index) => (
                    <div
                        key={index}
                        className="relative product-card text-center border border-gray-200 rounded-lg shadow-lg overflow-hidden group"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Image with Title Always Visible */}
                        {product.image.map((img, imgIndex) => (
                            <div key={imgIndex} className="relative">
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="object-cover w-full h-64"
                                />
                                {/* Product Title in the Center */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
                                    {product.title}
                                </div>
                            </div>
                        ))}

                        {/* Specifications Section */}
                        <div
                            className={`absolute inset-0 bg-black bg-opacity-80 text-white p-4 flex flex-col justify-center items-center transition-opacity duration-300 ${
                                hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                        >
                            <h4 className="font-bold text-lg">Specifications</h4>
                            <ul className="text-sm text-left list-disc list-inside mt-2">
                                {product.spec[0].item.map((spec, specIndex) => (
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
