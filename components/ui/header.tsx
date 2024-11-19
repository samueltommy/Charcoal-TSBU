'use client'

import { useState, useEffect } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import {navbar} from "@/app/api/value";
import {FaWhatsapp} from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

export default function Header({active} : {active?:string}) {
  const [top, setTop] = useState<boolean>(true)
  const pathname = usePathname()
  // warna kuning text-[#FFD646]
  const isActive = "text-green-600"
  // warna Hijau
  const nonActive = "text-[#1C4225]"
  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header data-aos="fade-up" data-aos-duration="500" className={`${pathname==="/"?"":"bg-white"} fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-lg shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto  px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="m-auto">
            <Logo className="w-8 h-8"/>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {navbar.map((object, index) => (
                  <li key={index}>
                    <Link
                        href={"/"+object.link}
                        className={`${active === object.link ? isActive : nonActive} font-medium hover:text-[#FFD646] px-5 py-3 flex items-center transition duration-150 ease-in-out`}
                    >
                      {object.name}
                    </Link>
                  </li>
              ))}

              <li>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="btn-sm text-gray-200 bg-[#1C4225] hover:bg-[#FFD646] hover:text-black ml-3">
                      <span>Contact</span>
                      {/*<FaWhatsapp  className="p-2 text-md text-4xl text-white" />*/}
                      <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Plese select contact below</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter className={'flex gap-4'}>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <Link href="https://wa.me/818064228470" className={'bg-[#1C4225] text-white p-1 px-2 rounded-md flex flex-row justify-center items-center'} >
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

              </li>
            </ul>

          </nav>

          <MobileMenu active={active}/>

        </div>
      </div>
    </header>
  )
}
