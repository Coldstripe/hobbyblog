"use client";
import { FaMapPin } from "react-icons/fa";
import Image from "next/image";
import getFormattedTags from "@/lib/getFormattedTags";
import { useRouter } from "next/navigation";

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
  tags: string[];
};

export default function BlogCard(props: CardProps) {
  return (
    <div className="container relative flex flex-col mx-auto rounded-lg shadow-lg group/card laptop:min-h-full auto-cols-fr laptop:flex-row laptop:auto-rows-fr bg-stone-700 dark:bg-gray-500 text-neutral-200 dark:text-white/90 hover:drop-shadow-lg">
      {props.cardImg && (
        <Image
          className="mt-0 mb-0 rounded-lg object max-laptop:w-full"
          src={props.cardImg}
          alt={props.title}
          width={200}
          height={200}
          sizes="(min-width: 1040px) 200px, (min-width: 740px) calc(-5.71vw + 671px), calc(95.48vw - 58px)"
        />
      )}

      <div className="px-6 pt-4">
        <div className="flex mb-2 text-xl font-bold drop-shadow">
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
          <p className="flex my-0 text-sm font-normal text-gray-300/90 dark:text-gray-200">
            {props.description}
          </p>
        )}
      </div>
      <div className="m-5">
        {props.tags && <BlogTags tags={getFormattedTags(props.tags)} />}
      </div>
    </div>
  );
}

function BlogTags(props: TagProps) {
  return (
    <ul className="flex flex-row flex-wrap flex-initial p-0 m-0 overflow-x-auto laptop:justify-center max-laptop:overflow-y-auto gap-y-0">
      {props.tags.map((tag, i) => (
        <li
          key={i}
          className="py-1 px-1.5 m-0.5 text-sm min-w-max text-center laptop:pointer-events-auto font-semibold basis-auto !text-gray-700 !no-underline bg-gray-200 rounded-full dark:bg-slate-100 line-clamp-1"
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
}
