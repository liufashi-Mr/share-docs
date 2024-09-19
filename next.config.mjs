import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import { fileURLToPath } from "url";
import path from "path";

const withMDX = createMDX({
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.tailwindui.com",
      },
    ],
  },
};

export default withMDX(nextConfig);
