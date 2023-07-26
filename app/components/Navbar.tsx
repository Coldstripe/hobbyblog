import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav
        className="sticky z-20 top-0 flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center">
            <button
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
          </div>

          <div
            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentX"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="/"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="/posts/about-me"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  About
                </Link>
              </li>
              <li
                className="scale-125 self-center lg:mb-0 lg:pr-2"
                data-te-nav-item-ref
              >
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="https://www.instagram.com/coldstripe_"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <div></div>
        <Image
          alt="Header Image"
          priority={true}
          width={4000}
          height={300}
          className="w-full max-h-fit"
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          src={"/images/siteheader.png"}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12 text-stroke">
              <h1 className="mb-6 text-5xl font-bold drop-shadow">
                Coldstripe
              </h1>
              <h3 className="mb-8 text-3xl font-bold drop-shadow">
                Painting miniatures since 2019.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
