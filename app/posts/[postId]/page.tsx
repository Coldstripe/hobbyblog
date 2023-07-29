import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css"; //node_modules/highlight.js/styles
import MDXImage from "@/app/components/MDXImage";
import Gallery from "@/app/components/Gallery";

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
    <>
      <h2 className="mt-4 mb-0 text-3xl ">{meta.title}</h2>
      <p className="mt-0 mb-0">{pubDate}</p>
      {meta.author && <sub className="mt-0">By {meta.author}</sub>}
      <MDXImage src={meta.cardImg} alt={meta.title} />

      <p className="mt-0">{meta.description}</p>
      <hr className="my-1 border-neutral-900 dark:border-gray-200/90" />
      <article>{content}</article>
      {tags && (
        <hr className="mt-0 mb-4 border-neutral-900 dark:border-gray-200/90" />
      )}
      {tags && (
        <div className="flex flex-row gap-4 pb-4">Tags:&nbsp;{tags}</div>
      )}
    </>
  );
}
