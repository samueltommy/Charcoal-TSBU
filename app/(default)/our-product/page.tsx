'use client'
import Header from "@/components/ui/header";
import BackgroundGhost from "@/components/micro/background-ghost";
import Footer from "@/components/micro/footer";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Image from "next/image";
import Backround from "@/public/img/bg1.webp";

interface ourProductSpec {
    title: string;
    spec: { title: string, item: { specTitle: string, specDec: string }[] }[];
    image: { url: string, title: string }[];
}
export default function OurProduct() {
    const produc:ourProductSpec[] =[
        {
            title:"Shisha/Hookah Briquettes",
            spec:[
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Moisture ",specDec:" : 5%"},
                        {specTitle:"Ash Content",specDec:": 2%"},
                        {specTitle:"Ash Color",specDec:" : White "},
                        {specTitle:"Fix Carbon",specDec:" : 85%"},
                        {specTitle:"Calorific value",specDec:" : 8000 Kcal"},
                        {specTitle:"Volatile matter",specDec:" : 10%"},
                        {specTitle:"Material ",specDec:" : Pure Natural Coconut Shell"},
                        {specTitle:"Burning Time",specDec:" : 2 Hours"},
                        {specTitle:"Size",specDec:" : Cube 2.2, Cube 2.5, Cube 2.6, Cube 2.7, Finger, Half Finger, Hexa, Kalaud (Can be customized) "},

                    ]},
            ],
            image:[
                {url:"/img/Shisha.webp",title:"Tani Solusi Berjaya Utama"},

            ]
        },
        {
            title:"Barbecue Briquettes",
            spec:[
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Moisture ",specDec:" : 5%"},
                        {specTitle:"Ash Content",specDec:": 4-10%"},
                        {specTitle:"Fix Carbon",specDec:" : 85%"},
                        {specTitle:"Calorific value",specDec:" : 8500 Kcal"},
                        {specTitle:"Volatile matter",specDec:" : 15%"},
                        {specTitle:"Material ",specDec:" : Coconut Shell and Hardwood"},
                        {specTitle:"Burning Time",specDec:" : 5 Hours"},

                    ]},
            ],
            image:[
                {url:"/img/BBq.webp",title:"Tani Solusi Berjaya Utama"},
                {url:"/img/BBq1.webp",title:"Tani Solusi Berjaya Utama"},
            ]
        },
        {
            title:"Hardwood/Lump Charcoal",
            spec:[
                {title:"Product Spesification",
                    item:[
                        {specTitle:"Shape",specDec:": Lump"},
                        {specTitle:"Size",specDec:" : 5-20 Cm"},
                        {specTitle:"Moisture ",specDec:" : Max 10%"},
                        {specTitle:"Colories",specDec:" : Min. 7800"},
                        {specTitle:"Burning Time",specDec:" : 3 Hours"},

                    ]},
            ],
            image:[
                {url:"/img/Hardwood.webp",title:"Tani Solusi Berjaya Utama"},
            ]
        }
    ]
    return(
        <>
            <Header active={"our-product"}/>
            <BackgroundGhost/>

            {produc.map((obj,index)=>(
                <div key={index} className="mx-12 mt-20 md:mx-24">
                    <h3 className="h3">
                        {obj.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                            {obj.spec.map((obj,index)=>(
                                <div key={index}>
                                    <AccordionItem value={`item-${index}`}>
                                        <AccordionTrigger>{obj.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc m-8">
                                                {obj.item.map((obj,index)=>(
                                                    <li className="my-2 text-md" key={index}>
                                                        <p >
                                                            <span className="font-bold">{obj.specTitle}</span>
                                                            <span className="font-normal">{obj.specDec}</span>
                                                        </p>

                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>

                        <div className="flex flex-wrap">
                            {obj.image.map((obj,index)=>(
                                <div className=" w-fit text-center m-8" key={index}>
                                    <img
                                        src={obj.url}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        alt="No image"
                                        className="w-full max-h-[20rem] object-cover"
                                        // priority={true}
                                        // quality={50}
                                    />
                                    {/*<h5 className="text-sm md:h5">*/}
                                    {/*    {obj.title}*/}
                                    {/*</h5>*/}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            ))}

            <Footer/>
        </>
    )
}
