import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem";

export default async function Posts() {
    const posts = await getPostsMeta();

    if(!posts){
        return <p className="mt-10 text-center">
            Sorry, no posts available.
        </p>
    }
    return (
        <section className="self-center mx-auto">
            <h2 className="text-4xl font-bold prose text-center dark:prose-invert">Blog Posts</h2>
            <ul className="p-0 m-0 list-none">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}
