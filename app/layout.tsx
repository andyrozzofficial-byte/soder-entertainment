import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { BookingModalProvider } from "@/app/components/booking/PremiumBookingModal";
import { StickyTopBar } from "@/app/components/StickyTopBar";

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
  title: "Söder Entertainment",
  description:
    "Event & upplevelser som folk minns – ljud, ljus, show och fyrverkeri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050A1A] text-white">
        <BookingModalProvider>
          <StickyTopBar />
          {children}
        </BookingModalProvider>
      </body>
    </html>
  );
}
