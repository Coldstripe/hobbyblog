import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

//By Cameron Thacker
export const metadata: Metadata = {
  title: "Coldstripe's Hobby Blog",
  description: "A completely normal hobby blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="app"
      lang="en"
      className=" bg-neutral-300 dark:bg-slate-800 text-neutral-900 dark:text-white/90"
    >
      <Analytics />
      <body className={roboto.className}>
        <Navbar />
        <main className="px-4 mx-auto mt-20 prose prose-xl md:px-6 prose-slate dark:prose-invert">
          {children}
        </main>
      </body>
    </html>
  );
}
