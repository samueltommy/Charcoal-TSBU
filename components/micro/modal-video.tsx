'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  videoWidth: number
  videoHeight: number
  className?: string 
  videoUrl?: string 
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  videoWidth,
  videoHeight,
  className,
  videoUrl
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>

      {/* Video thumbnail */}
      <div>
        <div className="relative flex justify-center" data-aos="zoom-y-out" data-aos-delay="450">
          <div className="-full aspect-video relative">
            <img 
              src={thumb.src} 
              width={thumbWidth} 
              height={thumbHeight} 
              alt={thumbAlt} 
              className={`w-full h-full object-cover rounded-2xl ${className || ''}`}
            />  
            {/*<svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">*/}
            {/*  <defs>*/}
            {/*    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">*/}
            {/*      <stop stopColor="#FFF" offset="0%" />*/}
            {/*      <stop stopColor="#EAEAEA" offset="77.402%" />*/}
            {/*      <stop stopColor="#DFDFDF" offset="100%" />*/}
            {/*    </linearGradient>*/}
            {/*    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">*/}
            {/*      <stop stopColor="#FFF" offset="0%" />*/}
            {/*      <stop stopColor="#EAEAEA" offset="48.57%" />*/}
            {/*      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />*/}
            {/*    </linearGradient>*/}
            {/*    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">*/}
            {/*      <stop stopColor="#4FD1C5" offset="0%" />*/}
            {/*      <stop stopColor="#81E6D9" offset="25.871%" />*/}
            {/*      <stop stopColor="#338CF5" offset="100%" />*/}
            {/*    </radialGradient>*/}
            {/*    <circle id="hero-ill-d" cx="384" cy="216" r="64" />*/}
            {/*  </defs>*/}
            {/*  <g fill="none" fillRule="evenodd">*/}
            {/*    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />*/}
            {/*    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />*/}
            {/*    <g fillRule="nonzero">*/}
            {/*      <use fill="#000" xlinkHref="#hero-ill-d" />*/}
            {/*      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />*/}
            {/*    </g>*/}
            {/*  </g>*/}
            {/*</svg>*/}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
                <button 
                    className="flex items-center bg-white/90 rounded-full font-medium group p-2 md:p-4 shadow-lg hover:bg-white transition-colors duration-300" 
                    onClick={() => { 
                      if (videoUrl) {
                          window.open(videoUrl, '_blank')
                      } else {
                          setModalOpen(true)
                      }
                    }}
                >
                    <svg className="w-4 h-4 md:w-6 md:h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                        <path d="M10 17l6-5-6-5z" />
                    </svg>
                    <span className="ml-3">Watch the full video (2 min)</span>
                </button>
            </div>
          </div>
        </div>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                  <source type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}
