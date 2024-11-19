'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Image from "next/image";
import Backround from "@/public/img/bg1.webp"
import Footer from "@/components/micro/footer";

interface galleryItem {
    url: string,
    label: string
}
const galleryItem:galleryItem[] =[
    {
        url:"/img/Gallery1.webp",
        label:"Factory Front View"
    },
    {
        url:"/img/Gallery2.webp",
        label:"Factory Front View"
    },
    {
        url:"/img/Gallery3.webp",
        label:"Hardwood Charcoal"
    },
    {
        url:"/img/Gallery4.webp",
        label:"Coconut Shell Charcoal"
    },
    {
        url:"/img/Gallery5.webp",
        label:"Charcoal Burning Test"
    },
    {
        url:"/img/Gallery7.webp",
        label:"Hookah Shisha with Briqquetes"
    },
    {
        url:"/img/Gallery8.webp",
        label:"Charcoal Burning Test"
    },
    {
        url:"/img/Gallery9.webp",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery10.webp",
        label:"Inside the oven"
    },
    {
        url:"/img/Gallery14.webp",
        label:"Workers Photos"
    },
    {
        url:"/img/Gallery15.webp",
        label:"Workers Photos"
    }
    ,{
        url:"/img/Gallery18.webp",
        label:"Factory Inside View"
    }
    ,{
        url:"/img/Gallery19.webp",
        label:"Factory Inside View"
    }
    ,{
        url:"/img/Gallery21.webp",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery22.webp",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery23.webp",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery24(1).webp",
        label:"Factory Inside View"
    },
    {
        url:"/img/Gallery24.webp",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery25.webp",
        label:"Cube Charcoal Briqquettes"
    },
    {
        url:"/img/Gallery26.webp",
        label:"Factory Working Environment"
    },
    {
        url:"/img/Gallery27.webp",
        label:"Factory Working Environment"
    }
]

export default function Gallery() {
    return(
        <>
            <Header active={"gallery"}/>
            <BackgroundGhost/>

            <div className="w-full flex ml-12 md:ml-20 flex-wrap items-center my-24 gap-16 flex-wrap md:gap-12  mt-[12rem] md:mt-[17rem]">
                {galleryItem.map((obj,index)=>(
                    <div className="m-4 ">

                        <img
                            src={obj.url}
                            width={200}
                            height={50}
                            alt="No image"
                            className="object-cover w-[14rem] min-h-[10rem] md:max-w-[16rem] md:min-h-[16rem]"
                            // priority={true}
                            // quality={50}
                        />
                        <h5 className="text-sm md:h5 text-center">
                            {obj.label}
                        </h5>
                    </div>
                ))}

            </div>
            <Footer/>
        </>
    )
}
