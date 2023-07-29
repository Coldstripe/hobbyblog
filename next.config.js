/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com","lostexodite.com"],
    unoptimized: false,
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "raw.githubusercontent.com",
      port: "",
      pathname: "/Coldstripe/blogposts/main/images/**",
    },
  ],
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "coldstripe.vercel.app",
        defaultLocale: "en-US",
      },
    ],
  },
};

module.exports = nextConfig;
