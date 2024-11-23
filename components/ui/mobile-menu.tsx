'use client'

import dynamic from 'next/dynamic'
import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import {navbar} from "@/app/api/value";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {FaWhatsapp} from "react-icons/fa6";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {MdMailOutline} from "react-icons/md";

const MobileMenu = ({active}: {active?: string}) => {
  const isActive = "text-amber-400"
  const nonActive = "text-grey-600"
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  function onclicks() {
    console.log("hoak")
  }
  useEffect(() =>{
    console.log('Hoak',mobileNavOpen,mobileNav)
  },[mobileNavOpen])
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className={`p-2 rounded-lg transition-colors ${mobileNavOpen ? 'bg-gray-100' : ''}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          className="absolute top-full right-0 w-full sm:w-80 h-screen bg-white/95 backdrop-blur-md shadow-lg"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-6 py-8 space-y-4">
            {navbar.map((object, index) => (
              <li key={index}>
                <Link
                  href={"/"+object.link}
                  className={`${
                    active === object.link ? 'text-[#1C4225] font-semibold' : 'text-gray-600'
                  } block py-2 text-sm hover:text-[#FFD646] transition-colors`}
                >
                  {object.name}
                </Link>
              </li>
            ))}
            <li>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="w-full px-8 py-4 bg-[#1C4225] text-white rounded-full font-semibold hover:bg-[#FFD646] hover:text-black transition-all duration-300 shadow-lg my-2">
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
        </Transition>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(MobileMenu), {
  ssr: false
})