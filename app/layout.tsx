import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const eb_garamond = EB_Garamond({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Oriole",
  description: "Clone of Oriole - created by James Freitag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eb_garamond.className} max-w-[77rem] p-6 md:p-20`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
