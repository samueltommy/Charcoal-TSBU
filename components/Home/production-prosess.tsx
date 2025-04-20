import Carousel, {CarouselItem} from "@/components/micro/carousel";
import Image from "next/image";
export interface slickData {
    img: string
    text: string
    imageStyle?: {
        objectFit?: "cover" | "contain"
        objectPosition?: string
    }
}

export const dataSlickHome: slickData[] = [
    {
        img: "/img/Home3.webp",
        text: "home"
    },
    {
        img: "/img/Home5.webp",
        text: "home"
    },
    {
        img: "/img/Sawdust_Storage5_home.jpg",
        text: "home",
        imageStyle: {
            objectFit: "cover",
        }
    }
]

export const dataSlickFactory: slickData[] = [
    {img: "/img/Factory1.webp", text: "factory"},
    {img: "/img/Factory2.webp", text: "factory"},
]

export const dataSlick: slickData[] = [
    {img: "./logo2.webp", text: "Hoak1"},
    {img: "./logo2.webp", text: "Hoak2"},
    {img: "./logo2.webp", text: "Hoak3"},
    {img: "./logo2.webp", text: "Hoak4"},
    {img: "./logo2.webp", text: "Hoak5"},
    {img: "./logo2.webp", text: "Hoak6"},
    {img: "./logo2.webp", text: "Hoak7"},
]

export default function ProductionProsess() {
    return(
        <>
            <Carousel 
                autoScroll={true} 
                scrollInterval={7000} // 7 seconds delay for better viewing
                direction="right"
                continuous={true} // Ensures continuous right movement
            >
                {dataSlick.map((obj, index) => (
                    <CarouselItem key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={obj.img}
                                alt="carousel image"
                                style={{
                                    ...obj.imageStyle,
                                    width: '100%',
                                    height: '100%'
                                }}
                                priority={index === 0} // Prioritize loading first image
                            />
                            <p>{obj.text}</p>
                        </div>
                    </CarouselItem>
                ))}
            </Carousel>
        </>
    )
}
