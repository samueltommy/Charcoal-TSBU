import Carousel, {CarouselItem} from "@/components/micro/carousel";
import Image from "next/image";
export interface slickData {
    img: string
    text: string
}
export const dataSlickHome:slickData[] =
    [
        // {img:"/img/Home3.webp",text:"home"},
        // {img:"/img/Home2.webp",text:"home"},
        // {img:"/img/Home1.webp",text:"home"},
        //  {img:"/img/Home4.webp",text:"home"},
        {img:"/img/Home5.webp",text:"home"}
    ]
export const dataSlickFactory:slickData[] =
    [
        {img:"/img/Factory1.webp",text:"factory"},
        {img:"/img/Factory2.webp",text:"factory"},

    ]
export const dataSlick:slickData[] =
    [
        {img:"./logo2.webp",text:"Hoak1"},
        {img:"./logo2.webp",text:"Hoak2"},
        {img:"./logo2.webp",text:"Hoak3"},
        {img:"./logo2.webp",text:"Hoak4"},
        {img:"./logo2.webp",text:"Hoak5"},
        {img:"./logo2.webp",text:"Hoak6"},
        {img:"./logo2.webp",text:"Hoak7"},

    ]
export default function ProductionProsess() {

    return(
        <>
            <Carousel>
                {dataSlick.map((obj ,index)=>(
                    <CarouselItem key={index} >
                        <Image
                            src={obj.img}
                            alt="eror"
                        />
                        <p>{obj.text}</p>
                    </CarouselItem>
                ))}
            </Carousel>
        </>
    )
}
