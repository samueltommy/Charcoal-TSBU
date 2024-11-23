import Image from "next/image";
import Background from "@/public/background.webp"
import {AiFillInstagram,AiFillYoutube,AiFillFacebook} from "react-icons/ai"
import VideoThumb from '@/public/img/video_thumb.webp'
import {Separator} from "@/components/ui/separator";
import ModalVideo from "@/components/micro/modal-video";
import Link from "next/link";

// export default function OurHighlight(){
//     return(
//         <>
//             <div>
//                 <h1 className="text-center h1 mt-20">
//                     Our Highlights
//                 </h1>
//                 <div className="flex flex-row gap-3 justify-center my-4 ">
//                      <Separator className={"w-12 border-2 rounded-sm border-[#1C4225]"}/><Separator className={"w-2 border-2 rounded-sm border-[#1C4225]"}/>
//                 </div>
//                 {/*<h4 className="text-center text-slate-400">*/}
//                 {/*    Getting close with our team and owner Briquettes*/}
//                 {/*</h4>*/}
//                 <Link href={"https://drive.google.com/file/d/1rM5cYtDXWyun9UXw7PJ-4hBxdXqRrKPf/view"}>
//                     <div className={"mx-1 md:mx-0"}>
//                         <ModalVideo
//                             thumb={VideoThumb}
//                             thumbWidth={768}
//                             thumbHeight={432}
//                             thumbAlt="Company Profile Video - PT Tani Solusi Berjaya Uta"
//                             videoWidth={1920}
//                             videoHeight={1080} />
//                     </div>
//                 </Link>
//             </div>
//         </>
//     )
// }

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
                    <Link 
                        href="https://drive.google.com/file/d/1rM5cYtDXWyun9UXw7PJ-4hBxdXqRrKPf/view"
                        className="block relative group aspect-video w-full mb-16" // Added margin bottom
                    >
                        <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                            <ModalVideo
                                thumb={VideoThumb}
                                thumbWidth={1920}
                                thumbHeight={1080}
                                thumbAlt="Company Profile Video - PT Tani Solusi Berjaya Utama"
                                videoWidth={1920}
                                videoHeight={1080}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
