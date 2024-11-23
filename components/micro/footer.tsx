import Image from "next/image"
import {inter} from "@/app/api/util"
import {navbar} from "@/app/api/value"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#1C4225] text-white">
            {/* Main Footer Content */}
            <div className="max-w-[90rem] mx-auto px-4 pt-16 pb-8">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Working Hours */}
                    <div>
                        <h2 className="text-xl font-bold mb-6">Working Hours</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Mon - Sat</span>
                                <span className="text-gray-300">8:00 - 17:00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Sunday</span>
                                <span className="text-gray-300">Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-bold mb-6">Contact Us</h2>
                        <div className="space-y-4">
                            <Link href="https://wa.me/818064228470" 
                                className="block text-gray-300 hover:text-white transition-colors duration-300">
                                Phone: +818064228470 (Adam "Rio" Baihaqi)
                            </Link>
                            <Link href="mailto:adamsatrio@tsbu.co.id"
                                className="block text-gray-300 hover:text-white transition-colors duration-300">
                                Email: adamsatrio@tsbu.co.id
                            </Link>
                            <Link href="https://www.google.com/maps/@-7.0953262,111.1403563,3a,75y,75.95h,75.77t/data=!3m6!1e1!3m4!1siyxD0x7gK0kwnczgXxaHRg!2e0!7i16384!8i8192?entry=ttu" 
                                className="block text-gray-300 hover:text-white transition-colors duration-300">
                                Address: Jalan Raya Nasional Blora - Purwodadi, Dsn. Semenrejo, 
                                Ds. Truwulo, Ngaringan, Grobongan, Central Java, Indonesia (58193)
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-gray-300">
                            © 2023 Tani Solusi Berjaya Utama. All rights reserved.
                        </div>
                        <nav className="flex flex-wrap justify-center gap-6">
                            {navbar.map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/${item.link}`}
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
