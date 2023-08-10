import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";
import AuthProvider from "./context/AuthProvider";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

//By Cameron Thacker
export const metadata: Metadata = {
  title: "Coldstripe's Hobby Blog",
  description: "Legendary.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="app" lang="en" className="dark">
      <Analytics />
      <body
        className={
          "bg-neutral-300 dark:bg-slate-800 text-neutral-900 dark:text-white/90 prose-ul:leading-tight prose-a:text-yellow-500 prose-a:no-underline hover:prose-a:underline" +
          roboto.className
        }
      >
        <AuthProvider>
          <Navbar />
        <main className="flex flex-auto px-4 mx-auto mt-20 prose prose-xl md:px-6 place-content-center">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
