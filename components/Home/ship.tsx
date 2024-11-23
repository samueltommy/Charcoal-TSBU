import ResponsiveCarousel from "@/components/micro/carousel/responsive";
import {
    AlertDialog, AlertDialogCancel,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa6";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {MdMailOutline} from "react-icons/md";

export default function Ship() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-[90rem] mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="bg-[#FFD646] rounded-2xl p-12 lg:p-16" data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl h2 mb-6">
                            We Ship All Around The World
                        </h2>
                        <p className="text-lg text-black/70 font-medium mb-8">
                            Ready to order premium charcoal? Connect with us instantly through WhatsApp or email by clicking the Contact button.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative" data-aos="fade-left">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <ResponsiveCarousel option="factory" className="max-h-[24rem]" />
                        </div>
                        
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-8 py-4 bg-[#1C4225] text-white rounded-full font-semibold hover:bg-[#FFD646] hover:text-black transition-all duration-300 shadow-lg">
                                    Contact Us
                                </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-white rounded-xl p-6 max-w-md w-full">
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-2xl font-bold text-center text-[#1C4225] mb-6">
                                        Choose Your Preferred Contact Method
                                    </AlertDialogTitle>
                                </AlertDialogHeader>
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Link 
                                            href="https://wa.me/818064228470" 
                                            className="w-full bg-[#25D366] text-white py-3 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all duration-300 font-medium"
                                        >
                                            <FaWhatsapp className="text-xl" />
                                            <span>WhatsApp</span>
                                        </Link>
                                        <Link 
                                            href="mailto:adamsatrio@tsbu.co.id" 
                                            className="w-full bg-[#1C4225] text-white py-3 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all duration-300 font-medium"
                                        >
                                            <MdMailOutline className="text-xl" />
                                            <span>Email</span>
                                        </Link>
                                    </div>
                                    <AlertDialogCancel className="w-full rounded-full border-2 px-8 hover:bg-gray-100 transition-all duration-300">
                                        Cancel
                                    </AlertDialogCancel>
                                </div>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        </section>
    )
}
