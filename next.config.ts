import type { NextConfig } from "next";

const repoBasePath = process.env.GITHUB_PAGES ? "/marien" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  images: { unoptimized: true },
};

export default nextConfig;
