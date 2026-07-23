import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ammar Yasser — React Native Developer",
  description:
    "React Native developer shipping cross-platform mobile apps — live on the App Store and Google Play.",
  openGraph: {
    title: "Ammar Yasser — React Native Developer",
    description:
      "Cross-platform mobile apps, shipped: insurance, e-commerce, ride-sharing, healthcare.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ammar Yasser — React Native Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar Yasser — React Native Developer",
    description:
      "Cross-platform mobile apps, shipped: insurance, e-commerce, ride-sharing, healthcare.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cairo.variable} ${geistMono.variable} h-full antialiased scroll-smooth scroll-pt-24`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
