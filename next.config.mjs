/**
 * Static export for GitHub Pages (project site served under /artmuseum/).
 *
 * - output: "export"        → emits a static site to ./out on `next build`
 * - basePath / assetPrefix  → the repo is served at github.io/artmuseum
 * - images.unoptimized      → GitHub Pages has no Next image optimizer
 * - trailingSlash           → each route emits <route>/index.html for Pages
 *
 * basePath is applied automatically to <Link> and next/image src, so app code
 * keeps using root-relative paths ("/", "/assets/…"). Deploying elsewhere
 * (e.g. Vercel) just needs BASE_PATH unset.
 */
const basePath = process.env.BASE_PATH ?? "/artmuseum";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // Exposed to the client so CoverImage can prefix basePath onto image src:
  // next/image does NOT apply basePath when images.unoptimized is set.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
