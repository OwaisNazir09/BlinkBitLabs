import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BlinkBit Labs — Innovative Web & Software Solutions",
  description:
    "We design and build modern web, software, and digital solutions that empower businesses to grow faster.",
  openGraph: {
    title: "BlinkBit Labs",
    description:
      "Innovation at the speed of a blink — web, mobile, and cloud software.",
    type: "website",
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
      className={`${syne.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black font-sans text-white">{children}</body>
    </html>
  );
}
