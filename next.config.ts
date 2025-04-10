import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    theme: {
      extend: {
        colors: {
          border: 'var(--color-border)', // Define the border color
        },
      },
    },
    plugins: [],
};

export default nextConfig;
