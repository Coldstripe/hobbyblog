import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "tw-elements/dist/css/tw-elements.min.css";
import DynamicNavbar from "./components/dynamic/DynamicNavbar";
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
    <html
      lang="en"
      className="grid bg-neutral-300 dark:bg-slate-800 w-fit h-fit"
    >
      <Analytics />
      <body className={roboto.className}>
        <DynamicNavbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
