'use client'
import Image from "next/image"
import { useSmartcrop } from "use-smartcrop";
export default function ProfilePic(){
    const src = "/images/profilepic.png";
    const w = 200;
    const h = 200; 
    const [cropped, error] = useSmartcrop({src}, {width: w, height: h});
    return (
        <section className="w-full mx-auto">
            {cropped && 
            <Image 
                alt="Coldstripe" 
                className="border-4 border-stone-500 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8" 
                src={cropped}
                width={w}
                height={h}
            />}
        </section>
    )
}