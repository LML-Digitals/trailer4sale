import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DFW Food Truck Trailer For Sale | Fully-Equipped & Ready to Operate",
  description: "Premium food truck trailer for sale in Dallas-Fort Worth area. Fully equipped, like-new condition, ready for immediate use. Perfect for aspiring food entrepreneurs.",
  keywords: "food truck trailer, DFW food truck, food truck for sale, food trailer, food business, food truck equipment, Dallas food truck, Fort Worth food truck",
  openGraph: {
    title: "DFW Food Truck Trailer For Sale | Fully-Equipped & Ready to Operate",
    description: "Premium food truck trailer for sale in Dallas-Fort Worth area. Fully equipped, like-new condition, ready for immediate use.",
    images: [
      {
        url: "/pic1.JPG",
        width: 1200,
        height: 630,
        alt: "DFW Food Truck Trailer",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffd700" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11165567109"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11165567109');
          `}
        </Script>
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
