import { getServerUrl } from "@/get-server-url";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "grazias.com",
  description: "Testimonials Made easy!",
  metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "h-full")}>
        <Providers>{children}<Analytics /><SpeedInsights /></Providers>
      </body>
    </html>
  );
}
