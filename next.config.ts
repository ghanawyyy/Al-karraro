import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Suc'ara was rebranded as Cukarra; keep the old paths working.
  async redirects() {
    return [
      { source: "/sucara", destination: "/cukarra", permanent: true },
      { source: "/sucara/:section", destination: "/cukarra/:section", permanent: true },
    ];
  },
};

export default nextConfig;
