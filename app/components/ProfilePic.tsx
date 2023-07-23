import Image from "next/image"

export default function ProfilePic(){
    const w = 200;
    const h = 200; 
    return (
        <section className="w-full mx-auto">
            <Image 
                alt="Coldstripe" 
                className="border-4 border-stone-500 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8" 
                src="/images/profilepic.png"
                width={w}
                height={h}
            />
        </section>
    )
}