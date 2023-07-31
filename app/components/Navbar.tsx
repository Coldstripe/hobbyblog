import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 grid w-screen h-auto grid-cols-3 grid-rows-1 py-1 mb-20 font-sans capitalize align-middle bg-gray-100 group/navheader text-neutral-900 hover:text-yellow-800">
      <ol className="flex float-left col-start-1 gap-4 pl-10 my-1 list-none list-outside flex-nowrap min-w-max">
        <li>
          <Link
            href="/"
            className="text-xl font-medium no-underline hover:text-yellow-600 hover:drop-shadow list-item"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className="text-xl font-medium no-underline hover:text-yellow-600 hover:drop-shadow list-item"
          >
            Posts
          </Link>
        </li>
      </ol>
      <div className="col-start-2 mx-5 my-1 text-xl font-medium uppercase pointer-events-none justify-self-center min-w-max text-neutral-900/40 group-hover/navheader:text-yellow-900/50">Coldstripe</div>
      <ol className="flex justify-end float-right col-start-3 gap-4 mx-10 my-1 list-none list-outside flex-nowrap min-w-max">
        <li>
          <Link
            href="https://www.instagram.com/coldstripe_/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-3xl no-underline hover:text-yellow-600 hover:font-medium hover:drop-shadow list-item"
            
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Coldstripe/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-3xl no-underline hover:text-yellow-600 hover:font-medium hover:drop-shadow list-item"
          >
            <FaGithub />
          </Link>
        </li>
      </ol>
    </nav>
  );
}
