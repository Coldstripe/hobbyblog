import { FaMapPin } from "react-icons/fa";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  cardImg: string;
  isPinned: boolean;
  description: string;
};
export default function BlogCard(props: Props) {
  
  const BlogTags = () => {
    return (
      <ul>
        {props.tags.map((value) => (
          <span key={props.tags.indexOf(value)} className="transition ease-in-out delay-150 laptop:hover:-translate-y-1 inline-block bg-gray-200 dark:bg-stone-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{value.replaceAll('_',' ')}
          </span>
        ))}
      </ul>
    );
  }

  return (
    <div className="relative max-w-sm bg-stone-700 dark:bg-stone-600 text-neutral-200 dark:text-white/90 rounded overflow-hidden shadow-lg hover:drop-shadow-lg">
      {props.cardImg && (
        <Image
          className="w-full mt-0 mb-0"
          src={props.cardImg}
          alt={props.title}
          width={200}
          height={200}
          sizes="(min-width: 460px) 384px, 90vw"
        />
      )}
      {props.isPinned && (
        <div
          className="absolute right-5 top-5 animate-pulse text-amber-600"
          title="Pinned"
        >
          <FaMapPin />
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {props.title}
        </div>
        {props.description && (
          <p className="text-gray-300/90 dark:text-gray-200 text-base font-medium mb-0">
            {props.description}
          </p>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <hr className="mb-3 mt-0 dark:border-gray-200/90" />
        <BlogTags />
      </div>
    </div>
  );
}
