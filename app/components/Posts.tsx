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
        <section className="mx-auto">
            <h2 className="flex-none text-4xl font-bold ">Blog</h2>
            <ul className="grid grid-flow-row p-0 list-none dark:text-white/90">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}
