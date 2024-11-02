import type { Metadata } from "next";
import "./globals.css";
import {Delius_Unicase} from "next/font/google";

export const metadata: Metadata = {
  title: "Poookiemaniaa by Ayshaaa WITee",
  description: "Poookiemaniaaaaa by Ayshaaa WITee",
};

const font = Delius_Unicase({
    weight: ['400'],

})

// MAIN COMPONENT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
