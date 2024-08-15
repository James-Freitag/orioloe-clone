import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const eb_garamond = EB_Garamond({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={eb_garamond.className}>{children}</body>
    </html>
  );
}
