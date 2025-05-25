// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // ทุก route ที่ขึ้นต้นด้วย /api
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // หรือใส่ origin ที่เฉพาะเจาะจง
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
};

export default nextConfig;
