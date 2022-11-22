/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.nflxext.com",
      },
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
}