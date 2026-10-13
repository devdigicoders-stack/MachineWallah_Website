import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
    turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/rent-machines", destination: "/services/rent" },
      { source: "/buy-sell", destination: "/services/buy-sell" },
      { source: "/transport", destination: "/services/transport" },
      { source: "/materials", destination: "/services/materials" },
    ];
  },
};

export default nextConfig;
