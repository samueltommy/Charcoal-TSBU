import Image from "next/image";
import Background from "@/public/background.webp"
import {AiFillInstagram,AiFillYoutube,AiFillFacebook} from "react-icons/ai"
import VideoThumb from '@/public/img/video_thumb.webp'
import {Separator} from "@/components/ui/separator";
import ModalVideo from "@/components/micro/modal-video";
import Link from "next/link";

export default function OurHighlight() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[90rem] mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl h2 mb-6">
                        Our Highlights
                    </h2>
                    <div data-aos="fade-up" className="flex justify-center gap-2">
                        <div className="h-1 w-16 bg-[#1C4225] rounded-full"></div>
                        <div className="h-1 w-4 bg-[#1C4225] rounded-full"></div>
                    </div>
                </div>

                <div data-aos="fade-up" className="max-w-5xl mx-auto">
                    <div className="block relative group aspect-video w-full mb-16">
                        <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                            <ModalVideo
                                thumb={VideoThumb}
                                thumbWidth={1920}
                                thumbHeight={1080}
                                thumbAlt="Company Profile Video - PT Tani Solusi Berjaya Utama"
                                videoWidth={1920}
                                videoHeight={1080}
                                className="w-full h-full object-cover"
                                videoUrl="https://drive.google.com/file/d/1rM5cYtDXWyun9UXw7PJ-4hBxdXqRrKPf/view"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
