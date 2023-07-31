import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css"; //node_modules/highlight.js/styles
import MDXImage from "@/app/components/MDXImage";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag.replaceAll("_", " ")}
    </Link>
  ));

  return (
    <div className="prose dark:prose-invert lg:prose-xl">
      <h2 className="my-1 text-3xl">{meta.title}</h2>
      <section>{pubDate}</section>
      {meta.author && <sub>By {meta.author}</sub>}
      <MDXImage src={meta.cardImg} alt={meta.title} />
      <section>{meta.description}</section>
      <hr className="my-5 border-neutral-900 dark:border-white/70" />

      <article>{content}</article>

      <hr className="my-5 border-neutral-900 dark:border-white/70" />
      {meta.tags && (
        <div className="flex flex-row flex-wrap justify-center gap-4 pb-5 line-clamp-1">
          <span className="font-medium">Tags:</span>
          {tags}
        </div>
      )}
    </div>
  );
}
