import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation"

export function generateStaticParams(){
    const posts = getSortedPostsData(); //deduped

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: {postId: string}}) {
    
    const posts = getSortedPostsData(); //deduped
    const {postId} = params

    const post = posts.find(post => post.id === postId)

    if(!post){
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title
    }
}

export default async function Post({ params }: { params: {postId: string}}) {
    
    const posts = getSortedPostsData(); //deduped
    const {postId} = params

    if(!posts.find(post => post.id === postId)){
        return notFound()
    }

    const {title, date, headerImg, contentHtml} = await getPostData(postId);
    const pubDate = getFormattedDate(date);
    const w = 600;
    const h = 200;
    const src = headerImg;

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h2 className="text-3xl mt-4 mb-0">
                {title}
            </h2>
            <p className="mt-0">
                {pubDate}
            </p>
            <h1>
                <Image
                    src={src} 
                    alt={title}
                    className="w-full my-0 drop-shadow-md"
                    width={w}
                    height={h}
                />
            </h1>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml}}></section>
            </article>
            <Link href="/" className="no-underline">
                <div className="sticky bottom-1 z-10 dark:bg-slate-400/90 dark:hover:bg-slate-300 
                bg-stone-500/90 hover:bg-stone-600 hover:text-white rounded text-center my-5 drop-shadow-sm">
                    Back to home
                </div>
            </Link>
            
        </main>
    )
}