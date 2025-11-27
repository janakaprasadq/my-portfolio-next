/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { reactCompiler: false },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.aistudio.google.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
