'use client'

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

export default function MobileMenu({active} : {active?:string}) {
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
      {/* Hamburger button */}
      <button
        id="trigger"
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        // onClick={() => onclicks()}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav} id="mobileNav">
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
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
                      href={"/"+object.link}
                      className={`${active === object.link ? isActive : nonActive} font-medium hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out`}
                  >
                    {object.name}
                  </Link>
                </li>
            ))}

            <li>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2" >
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
        </Transition>
      </div>
    </div>
  )
}
