import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import 'highlight.js/styles/github-dark.css' //node_modules/highlight.js/styles
import Image from "next/image"

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams(){
    const posts = await getPostsMeta(); //deduped

    if(!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
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
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0">{pubDate}</p>
      <h1 className="w-full my-0 drop-shadow-md rounded-lg">
        <Image
          src={meta.cardImg}
          alt={meta.title}
          width={650}
          height={650}
        />
      </h1>
      <article>{content}</article>
      {tags && <hr className="mt-0 mb-4" />}
      {tags && (
        <footer className="flex flex-row gap-4">
          Tags:&nbsp;{tags}
        </footer>
      )}
      <Link href="/" className="no-underline">
        <div className="sticky bottom-1 z-10 dark:bg-slate-400/90 dark:hover:bg-slate-300 bg-stone-500/90 hover:bg-stone-600 hover:text-white rounded text-center my-5 drop-shadow-sm">
          Back to home
        </div>
      </Link>
    </>
  );
}
