import MDXImage from "./MDXImage"

export default function ProfilePic(){
    return (
        <section className="">
            <MDXImage 
                alt="Coldstripe" 
                src="/images/profilepic.png"
                className="border-4 border-stone-500 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                priority={true}
                width={200}
                height={200}
            />
        </section>
    )
}