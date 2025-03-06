import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cmswire clone",
  description: "Blog site for tech",
  icons: {
    icon: [
      { url: "/bloglogo.webp", type: "image/png", sizes: "32x32" },
      { url: "/bloglogo.webp", type: "image/png", sizes: "192x192" },
    ],
    apple: "/bloglogo.webp",
  },
  openGraph: {
    title: "Cmswire clone",
    description: "Blog site for tech",
    url: "", 
    type: "website",
    images: [
      {
        url: "/bloglogo.webp",  
        width: 1200,
        height: 630,
        alt: "Asstech Preview",
      },
    ],
  },
  manifest: '/manifest.webmanifest'
};

//I add suppressHydration for chakra UI provider

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Provider>{children}</Provider>
      </body>
    </html>
  );
}