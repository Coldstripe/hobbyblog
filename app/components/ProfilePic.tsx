import ExportedImage from "next-image-export-optimizer"

export default function ProfilePic(){
    return (
        <section className="w-full mx-auto">
            <ExportedImage 
                alt="Coldstripe" 
                className="border-4 border-stone-500 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8" 
                src="/images/profilepic.png"
                width={200}
                height={200}
            />
        </section>
    )
}