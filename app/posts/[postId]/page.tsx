import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css"; //node_modules/highlight.js/styles
import Image from "next/image";

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
      {tag}
    </Link>
  ));

  return (
    <>
      <header>
        <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
        <p className="mt-0">{pubDate}</p>
        <p className="mt-0">{meta.description}</p>
        <Image
          src={meta.cardImg}
          alt={meta.title}
          width={650}
          height={650}
          className="rounded-sm w-full"
        />
      </header>
      <hr className="my-1 dark:border-gray-200/90"/>
      <article>{content}</article>
      {tags && <hr className="mt-0 mb-4 dark:border-gray-200/90" />}
      {tags && (
        <footer className="flex flex-row gap-4">Tags:&nbsp;{tags}</footer>
      )}
    </>
  );
}
