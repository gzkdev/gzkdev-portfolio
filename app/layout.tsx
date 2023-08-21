import "./globals.css";
import type { Metadata } from "next";
import Local from "next/font/local";

// const Nippo = Local({
//   src: "../public/assets/fonts/Nippo-Variable.ttf",
//   display: "swap",
// });

const GeneralSans = Local({
  src: "../public/assets/fonts/GeneralSans-Variable.ttf",
  display: "swap",
});

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
