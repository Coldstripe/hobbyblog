'use client'
import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"
import { useSmartcrop } from "use-smartcrop"

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
    const {id, title, date, headerImg} = post;
    const formattedDate = getFormattedDate(date);
    const src = headerImg;
    const [cropped, error] = useSmartcrop({src}, {width: 600, height: 200});

    return (
        <li className="mt-4 text-2xl font-thin text-white/90">
        
            <Link className="underline hover:text-black/70 hover:text-white hover:drop-shadow-xl" href={`/posts/${id}`}>
                <div className="text-center relative">
                    {cropped && <Image alt={title} src={cropped}/>}
                    {cropped && <div className="top-2 left-4 absolute">{title}</div>}
                </div>
            </Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}