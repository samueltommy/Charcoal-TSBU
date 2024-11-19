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

export default function Ship(){
    return(
        <>
            <div className="w-full mt-12">
                <div className="w-full py-10 flex items-center md:flex-row flex-col gap-8">
                    <div className="md:w-[50vw] w-full py-10 bg-[#FFD646] w-[50vw] flex flex-col items-center ">
                        <h1 className="h3 text-center ">
                            We Ship All Around The World
                        </h1>
                        <p className='md:px-0 px-10 mt-6 mb-10 md:w-6/12 w-12/12 text-grey-200 text-md text-center'>
                            Start Order Out Charcoal Now! You Can Send Us A Message via Whatsapp by Clicking The Button contact
                        </p>

                    </div>
                    <div className="flex flex-col md:mt-0 mt-[-3rem] items-center ml-[-3rem]">
                        <div className={"md:w-[50vw] w-full"}>
                            <ResponsiveCarousel option={"factory"} className={" max-h-[16rem] "} />
                        </div>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    className="relative top-[-10rem] btn text-black bg-[#FFD646] hover:text-white hover:bg-yellow-600">
                                    Contact Us
                                </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Plese select contact below</AlertDialogTitle>
                                </AlertDialogHeader>
                                <AlertDialogFooter className={'flex gap-4'}>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <Link href="https://wa.me/818064228470" className={'bg-[#1C4225] text-white p-1 px-2 rounded-md flex flex-row items-center'} >
                                        WhatsApp <FaWhatsapp className='ml-2' />
                                    </Link>
                                    <button>
                                        <Link href="mailto:adamsatrio@tsbu.co.id" className={
                                            cn(
                                                buttonVariants({ variant: "outline" }),
                                                'bg-black text-white p-1 px-2 rounded-md flex flex-row items-center')} >
                                            Mail <MdMailOutline className='ml-2' />
                                        </Link>
                                    </button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
                </div>
            </div>
        </>
    )
}
