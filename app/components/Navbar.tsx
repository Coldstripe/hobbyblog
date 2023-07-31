import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 grid w-screen h-auto grid-cols-3 grid-rows-1 py-1 mb-20 capitalize align-middle bg-neutral-100 group/navheader prose-a:!text-neutral-900 prose-a:!no-underline">
      <ol className="flex float-left col-start-1 gap-4 pl-10 my-1 list-none list-outside flex-nowrap min-w-max">
        <li>
          <Link
            href="/"
            className="text-xl font-medium hover:!text-yellow-500 hover:drop-shadow list-item"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className="text-xl font-medium hover:!text-yellow-500 hover:drop-shadow list-item"
          >
            Blog
          </Link>
        </li>
      </ol>
      <div className="col-start-2 mx-5 my-1 text-xl font-medium uppercase pointer-events-none select-none justify-self-center min-w-max text-neutral-900/40">
        Coldstripe
      </div>
      <ol className="flex justify-end float-right col-start-3 gap-4 mx-10 my-1 list-none list-outside flex-nowrap min-w-max">
        <li>
          <Link
            href="https://www.instagram.com/coldstripe_/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-3xl hover:!text-yellow-500 hover:font-medium hover:drop-shadow list-item"
          >
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Coldstripe/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-3xl hover:!text-yellow-500 hover:font-medium hover:drop-shadow list-item"
          >
            <FaGithub />
          </Link>
        </li>
      </ol>
    </nav>
  );
}
