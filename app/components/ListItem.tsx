import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
    const {id, title, date, headerImg} = post;
    const formattedDate = getFormattedDate(date);
    const w = 600;
    const h = 200;

    return (
        <li className="mt-4 text-2xl font-thin text-gray-50 ">
            <Link className="underline text-white/90 hover:text-white hover:drop-shadow-lg" href={`/posts/${id}`}>
                <div className="text-center relative bg-gradient-to-l from-transparent via-transparent to-amber-950 
                                border-solid border-2 rounded-xl dark:border-slate-500 border-stone-600">
                    
                    <Image 
                        alt={title} 
                        src={headerImg} 
                        width={w} 
                        height={h} 
                        placeholder="blur" 
                        blurDataURL="/public/images/placeholder.png" 
                        className="rounded-lg transition-opacity hover:opacity-50"
                    />
                    {<text className="top-2 left-4 absolute max-w-xs drop-shadow-lg">{title}</text>}
                    {<text className="bottom-2 left-4 absolute max-w-xs drop-shadow-lg">{formattedDate}</text>}
                </div>
            </Link>
            <br />
        </li>
    )
}