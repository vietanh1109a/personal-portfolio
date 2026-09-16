import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://personal-portfolio-alpha-three-36.vercel.app", lastModified: new Date() }]; }
