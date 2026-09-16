import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.VERCEL
    ? { output: "export" as const, images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
