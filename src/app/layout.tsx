import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import NavBar from '@/components/NavBar';

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "忘卻前夜養成指南",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSerifTC.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
