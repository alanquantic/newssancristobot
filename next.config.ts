import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "news.sancristobot.org",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
