/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
    domains: [
      "plus.unsplash.com",
      "vl-prod-static.b-cdn.net",
      "images.pexels.com",
      "images.unsplash.com",
      "www.pexels.com",
    ],
  },
};

module.exports = nextConfig;
