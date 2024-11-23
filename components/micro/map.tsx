import React from "react";
import Link from "next/link";

function Maps() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-[90rem] mx-auto px-4">
                <div data-aos="fade-up" className="rounded-2xl overflow-hidden shadow-xl">
                    <Link 
                        href='https://www.google.com/maps/@-7.0953262,111.1403563,3a,75y,75.95h,75.77t/data=!3m6!1e1!3m4!1siyxD0x7gK0kwnczgXxaHRg!2e0!7i16384!8i8192?entry=ttu'
                        className="block relative group"
                    >
                        <iframe
                            className="w-full min-h-[32rem] hover:opacity-95 transition-opacity duration-300"
                            src="https://maps.google.com/maps?q=PT.+Tani+Solusi+Berjaya+Utama&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            allowFullScreen
                        />
                        <div className="absolute inset-0 bg-[#1C4225]/5 group-hover:bg-transparent transition-all duration-300" />
                    </Link>
                </div>
            </div>
        </section> 
    )
}

export default Maps;
