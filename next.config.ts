import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kontakt",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hyr",
        destination: "/tjanster/uthyrning",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
