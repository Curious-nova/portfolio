import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint check during builds
  },
};

export default nextConfig;
