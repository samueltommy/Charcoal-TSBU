'use client'

import dynamic from 'next/dynamic'
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

const DynamicLogo = dynamic(() => import('./logo'), {
  ssr: false
})

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
    <header className={`${pathname==="/"?"":"bg-white/95"} fixed w-full z-30 transition-all duration-300 ease-in-out ${!top ? 'bg-white/95 backdrop-blur-md shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a>
                <DynamicLogo className="w-10 h-10"/>
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow items-center justify-end">
            <ul className="flex items-center gap-8">
              {navbar.map((object, index) => (
                <li key={index}>
                  <Link
                    href={`/${object.link}`}
                    className={`${
                      active === object.link ? isActive : nonActive
                    } relative font-medium text-sm tracking-wide hover:text-[#FFD646] transition-colors
                    ${active === object.link ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#FFD646]' : ''}`}
                  >
                    {object.name}
                  </Link>
                </li>
              ))}
              <li>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="px-6 py-2.5 bg-[#1C4225] text-white text-sm rounded-full font-medium hover:bg-[#FFD646] hover:text-black transition-all duration-300 shadow-sm">
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
              </li>
            </ul>
          </nav>

          <MobileMenu active={active}/>
        </div>
      </div>
    </header>
  )
}
