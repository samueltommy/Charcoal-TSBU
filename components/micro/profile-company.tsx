import Image from "next/image";
import backgroundImage from "@/public/img/Shipping1.webp"; // Replace with the actual image path

export default function ProfileCompany({ text }: { text: string }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-8 px-6 sm:px-8">
        {/* Left Section: Text */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About Us</h2>
          <h1 className="text-5xl font-bold text-orange-600 mb-6">PT. Tani Solusi Berjaya Utama</h1>
          <p className="text-lg text-gray-600 mb-4">
            Discover Our Diverse Charcoal Briquette Selection:
          </p>
          <div className="text-gray-700 text-md leading-relaxed text-justify">
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center">
          <Image
            src={backgroundImage}
            alt="Family running up stairs"
            className="rounded-lg shadow-lg object-cover w-full max-w-md lg:max-w-lg transform scale-x-[-1]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
