'use client'
import Header from "@/components/ui/header";

import Footer from "@/components/micro/footer";
import Hero from "@/components/Home/hero";
import Profile from "@/components/Home/profile";
import OurCertificate from "@/components/Home/our-certificate";
import Maps from "@/components/micro/map";
import {useEffect} from "react";
import Ship from "@/components/Home/ship";

export default function Home() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(()=>{
        scrollToTop()
    },[])
  return (
    <>
        <Header active=""/>
        <main className="flex min-h-screen flex-col items-center justify-between pt-20">
            <Hero/>
            <Profile/>
            <OurCertificate/>
        </main>
        <Maps/>
        <Ship/>
        <Footer />
    </>
  )
}

