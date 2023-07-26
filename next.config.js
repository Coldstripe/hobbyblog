/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
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
};

module.exports = nextConfig;
