import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      new URL("https://ru-msk-dr3-1.store.cloud.mts.ru/store/images/**"),
    ],
  },
};

export default nextConfig;
