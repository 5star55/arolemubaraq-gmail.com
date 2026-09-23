import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/lib/data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: `${profile.fullName} - ${profile.role}`,
  description: profile.about,
  openGraph: {
    title: `${profile.fullName} - ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${archivo.variable} antialiased`}>
      <body className="min-h-dvh bg-paper">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
