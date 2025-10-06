import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import FloatingSocials from "@/components/ui/floating-socials";
import { firmInfo } from "@/lib/dummy-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: firmInfo.seo_title || firmInfo.name,
  description: firmInfo.seo_description || firmInfo.tagline,
  keywords: "firma hukum, pengacara, konsultasi hukum, jakarta, indonesia",
  authors: [{ name: firmInfo.name }],
  openGraph: {
    title: firmInfo.seo_title || firmInfo.name,
    description: firmInfo.seo_description || firmInfo.tagline,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <FloatingSocials />
        <ScrollToTop />
      </body>
    </html>
  );
}
