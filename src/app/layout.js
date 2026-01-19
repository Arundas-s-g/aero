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

export const metadata = {
  title: "AeroUnwired | The Future of Flight",
  description: "Experience the ultimate in aerial technology with AeroUnwired.",
};

import AeroNav from "../components/AeroNav";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <AeroNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
