import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AL KARRARO GOURMET - VERDUN",
  description: "Al Karraro Gourmet menu — Halloween edition",
};

export const viewport: Viewport = {
  themeColor: "#160b1f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0b0710]">{children}</body>
    </html>
  );
}
