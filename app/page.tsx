import Link from "next/link";
import Video from "./components/Video";
export const revalidate = 86400;

export default function Home() {
  return (
    <div className="prose justify-normal lg:prose-xl dark:prose-invert">
      <div>
        Hello, my name is&nbsp;
        <span className="font-bold text-black dark:text-white">Cameron</span>! I
        am a software developer with experience in:
        <ul>
          <li>C#</li>
          <li>Javascript</li>
          <li>PostgreSQL</li>
          <li>Typescript</li>
          <li>Next.js</li>
        </ul>
      </div>
      <p>
        I started this website as a side project for fun, as a means to host my
        tabletop miniatures hobby. In the future it may expand to encompass
        other things.
      </p>
      <div>
        This website is hosted on&nbsp;
        <Link
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-yellow-500 no-underline hover:underline"
        >
          Vercel
        </Link>
        &nbsp;and built with&nbsp;
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-yellow-500 no-underline hover:underline"
        >
          Next.js
        </Link>
        &nbsp;and&nbsp;
        <Link
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-yellow-500 no-underline hover:underline"
        >
          Tailwind
        </Link>
        .
      </div>
      <div>
        Credit to <b>Dave Gray</b> for his awesome Next.js tutorials.
        <br />
        <Video id="6ih_3m_UPKg" />
      </div>
    </div>
  );
}
