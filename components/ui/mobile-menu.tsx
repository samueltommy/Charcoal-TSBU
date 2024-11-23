'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { navbar } from "@/app/api/value"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { FaWhatsapp } from "react-icons/fa6"
import { MdMailOutline } from "react-icons/md"

interface MobileMenuProps {
  active?: string
}

export default function MobileMenu({ active }: MobileMenuProps) {
  const isActive = "text-amber-400"
  const nonActive = "text-grey-600"
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen(prev => !prev)
  }, [])

  const clickHandler = useCallback(({ target }: { target: EventTarget | null }): void => {
    if (!mobileNav.current || !trigger.current) return
    if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return
    setMobileNavOpen(false)
  }, [mobileNavOpen])

  const keyHandler = useCallback(({ keyCode }: { keyCode: number }): void => {
    if (!mobileNavOpen || keyCode !== 27) return
    setMobileNavOpen(false)
  }, [mobileNavOpen])

  useEffect(() => {
    document.addEventListener('click', clickHandler)
    document.addEventListener('keydown', keyHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    }
  }, [clickHandler, keyHandler])

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={toggleMobileNav}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            {navbar.map((object, index) => (
              <li key={index}>
                <Link
                  href={`/${object.link}`}
                  className={`${active === object.link ? isActive : nonActive} font-medium hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out`}
                >
                  {object.name}
                </Link>
              </li>
            ))}

            <li>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="btn-sm text-gray-200 bg-[#1C4225] hover:bg-[#FFD646] hover:text-black w-full my-2 rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Contact</span>
                    <svg className="w-3 h-3 fill-current text-gray-200" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white rounded-xl shadow-lg border-0 mx-4">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-bold text-center text-[#1C4225]">Get in Touch</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex flex-col gap-3 mt-4">
                    <Link 
                      href="https://wa.me/818064228470" 
                      className="bg-[#25D366] text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#1ea952] transition-all duration-300 w-full"
                    >
                      <span>WhatsApp</span>
                      <FaWhatsapp className="text-xl" />
                    </Link>
                    <Link 
                      href="mailto:adamsatrio@tsbu.co.id" 
                      className="bg-[#1C4225] text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#153219] transition-all duration-300 w-full"
                    >
                      <span>Email</span>
                      <MdMailOutline className="text-xl" />
                    </Link>
                    <AlertDialogCancel className="rounded-full border-2 hover:bg-gray-100 transition-all duration-300 w-full">
                      Cancel
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
