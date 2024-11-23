'use client'

import React, { useCallback, useState, useEffect } from 'react'
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

  const scrollHandler = useCallback(() => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }, [])

  useEffect(() => {
      scrollHandler()
      window.addEventListener('scroll', scrollHandler)
      return () => window.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])

  return (
    <header data-aos="fade-down" 
    data-aos-duration="500" 
    className={`
        fixed w-full z-30 
        transition-all duration-300 ease-in-out
        ${pathname==="/"?"":"bg-white"}
        ${!top ? 'bg-white/95 backdrop-blur-sm shadow-lg' : ''}
    `}
    >
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="block">
            <Logo className="w-10 h-10 transition-transform duration-300 hover:scale-110"/>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
              {navbar.map((item, index) => (
                <Link
                    key={index}
                    href={`/${item.link}`}
                    className={`
                        ${active === item.link ? isActive : nonActive} 
                        font-medium hover:text-green-600 
                        transition-colors duration-300
                    `}
                >
                    {item.name}
                </Link>
              ))}   

              <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button className="px-6 py-2.5 bg-[#1C4225] text-white rounded-full font-medium hover:bg-[#FFD646] hover:text-black transition-all duration-300 flex items-center gap-2">
                        Contact
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12">
                            <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"/>
                        </svg>
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
          </nav>

          <MobileMenu active={active}/>

        </div>
      </div>
    </header>
  )
}
