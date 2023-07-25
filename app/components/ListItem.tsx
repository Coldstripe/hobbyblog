import Link from "next/link"
import { FaMapPin } from "react-icons/fa"
import getFormattedDate from "@/lib/getFormattedDate"
import ExportedImage from "next-image-export-optimizer"
import BlogCard from "./BlogCard"

type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
    const {id, title, date, headerImg, isPinned, description} = post;
    const formattedDate = getFormattedDate(date);

    return (
        <li className="mt-4 text-2xl font-thin text-gray-50 ">
            <Link className="group/card no-underline text-white/90 hover:text-white hover:drop-shadow-lg" href={`/posts/${id}`}>
                <BlogCard title={title} date={formattedDate} description={description} headerImg={headerImg} isPinned={isPinned}/>
            </Link>
            <br />
        </li>
    )
}