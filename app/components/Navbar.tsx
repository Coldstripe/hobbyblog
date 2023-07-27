"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const init = async () => {
      const { Collapse, Ripple, initTE } = await import("tw-elements");
      initTE({ Collapse, Ripple });
    };
    init();
  }, []);

  return (
    <header>
      <nav //Nav bar
        className="fixed z-50 top-0 flex w-full items-center justify-between bg-white py-2 text-neutral-600 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center">
            <button //Hamburger button
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:laptop:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
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
          height={500}
          className="w-full"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          quality={100}
          src={"/images/siteheader.png"}
        />
        <hr className="border-neutral-900 dark:border-white/90" />
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
