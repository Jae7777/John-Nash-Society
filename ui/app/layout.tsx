import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const timesNewRoman = localFont({
  src: '../public/times.ttf',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "John Nash Society",
  description: "Where rational behavior meets irrational behavior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${timesNewRoman.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
