import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false, // Security: Don't leak technology stack
  compress: true, // Performance: Ensure gzip/brotli is active
};

export default nextConfig;
