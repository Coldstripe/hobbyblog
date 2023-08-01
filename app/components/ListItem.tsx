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
    <li className="grid grid-flow-col mt-5">
      <Link
        className="!no-underline hover:drop-shadow-lg"
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
