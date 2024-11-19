import {AiOutlineTeam} from "react-icons/ai";
import {GoCommentDiscussion} from "react-icons/go";
import {Separator2} from "@/components/micro/separator2";

export interface blog{
    img:string,
    link:string
    title:string,
    text:string,
    when:string,
    who:string,
    CommentNumber?: number,
}
export default function Blog() {
    const data:blog[] =
        [
            {
                img:"./background.webp",link:"./",title:"How to test Shisha Briquettes",
                text:"How to Test Shisha Briquettes Several requests for shisha briquettes have come in with various specifications.",
                when:"14 September 2024",
                who:"Charcoal",
            },
            {
                img:"./background.webp",link:"./",title:"How to test Shisha Briquettes",
                text:"How to Test Shisha Briquettes Several requests for shisha briquettes have come in with various specifications.",
                when:"14 September 2024",
                who:"Charcoal",
            }
        ]
    return(
        <>
            <h1 className="h1 mt-8">Our Blog</h1>
            <Separator2/>
            <div className="flex flex-wrap justify-center gap-52  mx-20">
            {data.slice(0,3).map((obj,index)=>(
                    <a key={index} href={obj.link} className="flex flex-col w-3/12">
                        <img src={obj.img} alt="No Image"/>
                        <div className="flex flex-row my-4">
                            <AiOutlineTeam className="my-1"/>{obj.who}
                            <GoCommentDiscussion className="my-1 ml-3 mr-1"/>{obj.CommentNumber ? obj.CommentNumber : 0} comment
                        </div>
                        <h3 className="h3">
                            {obj.title}
                        </h3>
                        <p className="w-full max-h-[12rem] overflow-hidden">
                            {obj.text}
                        </p>
                    </a>
            ))}
            </div>
        </>
    )
}
