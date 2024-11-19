'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import Maps from "@/components/micro/map";

export default function Contact() {
    return(
        <>
            <Header active={"contact"}/>
            <BackgroundGhost/>
            <Maps/>
            <Footer/>
        </>
    )
}
