import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://localhost:3002/**"),
      new URL("http://v3.api.haroldkwan.com/**"),
    ],
  },
};

export default nextConfig;
