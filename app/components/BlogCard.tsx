import { FaMapPin } from "react-icons/fa";
import Image from "next/image";
import getFormattedTags from "@/lib/getFormattedTags";

type CardProps = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  cardImg: string;
  isPinned: boolean;
  description: string;
};

type TagProps = {
  tags: string[]
}

export default function BlogCard(props: CardProps) {
  return (
    <div className="relative flex flex-col flex-grow-0 max-w-xs overflow-hidden rounded-lg shadow-lg flex-r bg-stone-700 dark:bg-stone-600 text-neutral-200 dark:text-white/90 hover:drop-shadow-lg">
      {props.cardImg && (
        <Image
          className="top-0 w-full mt-0 mb-0"
          src={props.cardImg}
          alt={props.title}
          width={200}
          height={200}
          sizes="(min-width: 460px) 384px, 90vw"
        />
      )}
      
      <div className="px-6 pt-4">
        <div className="mb-2 text-xl font-bold drop-shadow">
          {props.title}
          {props.isPinned && (
        <div
          className="float-right text-yellow-500 animate-pulse"
          title="Pinned"
        >
          <FaMapPin />
        </div>
      )}
        </div>
        {props.description && (
          <p className="my-0 text-sm font-light text-gray-300/90 dark:text-gray-200">
            {props.description}
          </p>
        )}
      </div>
      <div className="m-5">
        {props.tags && <BlogTags tags={getFormattedTags(props.tags)}/>}
      </div>
    </div>
  );
}

function BlogTags(props: TagProps) {
  return (
    <ul className="flex flex-row flex-wrap gap-1 p-1 m-0 justify-normal">
      {props.tags.map((value, i) => (
        <span key={i} className="p-1 px-1.5 text-sm font-semibold flex-initial basis-auto text-gray-700 bg-gray-200 rounded-full dark:bg-stone-200 line-clamp-1">
          #{value}
        </span>
      ))}
    </ul>
  );
}