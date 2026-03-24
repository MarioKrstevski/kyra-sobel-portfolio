import type { NextConfig } from "next";

const staticExport = process.env.NEXT_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  // No URL-based image optimization (smaller surface on static/Workers; use compressed files in /public).
  images: {
    unoptimized: true
  }
};

// OpenNext dev only — not during `next build` (e.g. Vercel) or Wrangler/workerd breaks.
if (process.env.NODE_ENV === "development") {
  void import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) =>
    initOpenNextCloudflareForDev()
  );
}

export default nextConfig;
