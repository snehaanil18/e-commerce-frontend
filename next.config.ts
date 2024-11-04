import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
      domains: ['encrypted-tbn0.gstatic.com','m.media-amazon.com'],
  }
};

export default nextConfig;
