'use client'
import Image from "next/image"
import { useSmartcrop } from "use-smartcrop";
export default function ProfilePic(){
    const src = "/images/profilepic.png";
    const [cropped, error] = useSmartcrop({src}, {width: 200, height: 200});
    return (
        <section className="w-full mx-auto">
            {cropped && <Image alt="Coldstripe" className="border-4 border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8" src={cropped}/>}
        </section>
    )
}