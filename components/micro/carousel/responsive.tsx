
//carousels/Responsive.js
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {dataSlick, dataSlickFactory, dataSlickHome, slickData} from "@/components/Home/production-prosess";
import {Key, ReactNode, useEffect, useState} from "react";
interface Props {
    option:string
    className?:string
}
export default function ResponsiveCarousel(props:Props) {
    const [dataImage,setDataImage] = useState<slickData[]>()

    useEffect(()=>{
        console.log(props.option)
        if(props.option === "home"){
            setDataImage(dataSlickHome)
        }else if(props.option === "factory"){
            setDataImage(dataSlickFactory)
        }
    },[props])

    return (
        <div >
            <Carousel
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                dynamicHeight={false}
                autoPlay={true}
                interval={2000}
                className={`${props.option === "home"?"absolute " :""}  max-h-screen top-0 left-0 `}
            >
                {dataImage?.map((item,index) => (
                    <div key={index} className="">
                        <img
                            src={item.img}
                            alt="Hero Login Image"
                            className={`${props?.className} max-h-screen z-[-1] object-cover `}
                            sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                            // priority={true}
                            // quality={50}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

