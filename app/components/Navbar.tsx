import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
export default function Navbar(){
    return (
        <nav className="dark:bg-slate-700 bg-stone-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold dark:text-white/90 text-neutral-900 grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="dark:text-white/90 text-neutral-900 no-underline hover:text-white">
                        Coldstripe
                    </Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 dark:text-white text-4xl lg:text-5xl">
                    <Link href="https://www.instagram.com/coldstripe_" rel="noreferrer noopener" target="_blank" className="dark:text-white/90 text-neutral-900 no-underline hover:text-white"><FaInstagram/></Link>
                </div>
            </div>
        </nav>
    )
}