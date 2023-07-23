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
    const w = 600;
    const h = 200;
    const [cropped, error] = useSmartcrop({src}, {width: w, height: h});

    return (
        <li className="mt-4 text-2xl font-thin text-gray-50">
            <Link className="underline text-white/90 hover:text-white hover:drop-shadow-lg " href={`/posts/${id}`}>
                <div className="text-center relative bg-gradient-to-l from-transparent via-transparent to-amber-950">
                    {cropped && <Image alt={title} src={cropped} width={w} height={h} className="rounded-md transition-opacity hover:opacity-50"/>}
                    {cropped && <text className="top-2 left-4 absolute max-w-xs drop-shadow-lg">{title}</text>}
                    {cropped && <text className="bottom-2 left-4 absolute max-w-xs drop-shadow-lg">{formattedDate}</text>}
                </div>
            </Link>
            <br />
        </li>
    )
}