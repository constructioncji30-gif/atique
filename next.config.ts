import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // your existing config...
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push({
        apply: (compiler: any) => {
          compiler.hooks.done.tap("ForceExit", () => {
            setTimeout(() => process.exit(0), 0);
          });
        },
      });
    }
    return config;
  },
};

export default nextConfig;