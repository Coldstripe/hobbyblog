import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import BlogCard from "./BlogCard";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, author, tags, cardImg, isPinned, description } =
    post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="w-full h-full mt-4 text-2xl font-thin text-gray-50">
      <Link
        className="!font-sans !no-underline text-white/90 hover:text-white hover:drop-shadow-lg"
        href={`/posts/${id}`}
      >
        <BlogCard
          title={title}
          date={formattedDate}
          author={author}
          tags={tags}
          description={description}
          cardImg={cardImg}
          isPinned={isPinned}
        />
      </Link>
    </li>
  );
}
