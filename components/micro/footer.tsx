import {inter} from "@/app/api/util";
import {Separator} from "@/components/ui/separator";
import {navbar} from "@/app/api/value";
import Link from "next/link";


export default function Footer  (){
    return (
        <>
            <footer className={`${inter.variable} bg-[#1C4225] font-inter antialiased  text-gray-900 tracking-tight px-10 md:px-20 pt-20 pb-8`}>
                <div className="flex flex-col align-center md:flex-row m-auto min-w-full h-2/5">
                    <div className="grow">
                        <h2 className="text-xl text-white font-bold">Working Hours</h2>
                            <Separator className="my-6 bg-slate-300"/>
                        <div className="text-slate-300 flex flex-row">
                            <p className="grow">Mon - Sat : </p>
                            <p> 8.00 - 17.00</p>
                        </div>
                        <div className="mt-3 text-slate-300 flex flex-row">
                            <p className="grow">Sunday : </p>
                            <p> Closed</p>
                        </div>
                    </div>
                    <div className="grow mt-10 md:mt-0 md:ml-10">
                        <h2 className="text-xl text-white font-bold">Office</h2>
                        <Separator className="my-6 bg-slate-300"/>
                        <div className="text-slate-300 flex flex-col">

                            <Link href="https://wa.me/818064228470" className="grow hover:text-white">
                                Phone : +818064228470 (Adam “Rio” Baihaqi)
                            </Link>
                        </div>
                        <div className="mt-4 text-slate-300 flex flex-row">
                            <a href="https://www.google.com/maps/@-7.0953262,111.1403563,3a,75y,75.95h,75.77t/data=!3m6!1e1!3m4!1siyxD0x7gK0kwnczgXxaHRg!2e0!7i16384!8i8192?entry=ttu" className="grow hover:text-white">
                                Address :
                                Jalan Raya Nasional Blora - Purwodadi, Dsn. Semenrejo, <br/>Ds. Truwulo, Ngaringan,
                                Grobongan, Central Java, Indonesia (58193)
                            </a>
                        </div>
                        <div className="mt-4 text-slate-300 flex flex-row">
                            <a href="mailto:adamsatrio@tsbu.co.id" className="grow hover:text-white">
                                Email : adamsatrio@tsbu.co.id
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative  items-center flex flex-col md:flex-row mt-16 text-white">
                    <div className="align-middle mt-8 mr-8">
                        © 2023 Tani Solusi Berjaya Utama.
                    </div>
                    <div className="flex flex-row items-center mt-8">
                        {navbar.map((object, index) => (
                            <div key={index}>
                                <Link
                                    href={"/"+object.link}
                                    className={` font-medium hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out`}
                                >
                                    {object.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}

