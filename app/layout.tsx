import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Syncopate } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: "--font-manrope"
});

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: [ '400', '700'], // Customize weights as needed
  variable: "--font-syncopate"
});



export const metadata: Metadata = {
  title: "Shambhabya Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${manrope.variable} ${syncopate.variable}`}>{children}</body>
    </html>
  );
}
