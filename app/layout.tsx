import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://relius.com"),
  title: {
    default: "Relius | Ministry-focused church software",
    template: "%s | Relius",
  },
  description: "Relius is the ministry partner platform for churches - care for people, coordinate volunteers, plan services, and save time with AI-powered tools.",
  icons: {
    icon: "/relius_emblem_circle.png",
    apple: "/relius_emblem_circle.png",
  },
  keywords: [
    "church management software",
    "ministry software",
    "volunteer coordination",
    "pastoral care tools",
    "church resources",
    "church software",
  ],
  authors: [{ name: "Relius" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relius.com",
    siteName: "Relius",
    title: "Relius | Ministry-focused church software",
    description: "Care for people, organize volunteers, and save time with AI-powered church management built with ministry leaders.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Relius - Ministry partner for churches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relius | Ministry-focused church software",
    description: "Resources and software that serve churches with warmth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Analytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
