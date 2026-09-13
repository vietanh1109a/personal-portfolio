import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anh N. | Python Automation, APIs & Web Scraping",
  description: "Python developer focused on automation, API integrations, data processing, web scraping, and practical business tools.",
  keywords: ["Python Developer", "Python Automation", "Web Scraping", "API Integration", "Data Processing", "Excel Automation", "FastAPI"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
