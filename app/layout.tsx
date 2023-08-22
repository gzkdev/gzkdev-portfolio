import "./globals.css";
import type { Metadata } from "next";
import Local from "next/font/local";

const Switzer = Local({
  src: "../public/assets/fonts/Switzer-Variable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Godswill Ezihe",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Switzer.className}>{children}</body>
    </html>
  );
}
