import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // …
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
  // other config options go here
};

export default nextConfig;
