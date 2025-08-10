import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ngeles.in - Butuh Alasan Cerdas?",
  description:
    "Penyelamat andalan di situasi darurat! Generate alasan kreatif dan cerdas dengan AI.",
  keywords: ["alasan", "excuse generator", "AI", "kreatif", "lucu"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
