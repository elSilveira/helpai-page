import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/helpai-page",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
