import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PBL Group 3 second term",
  description:
    "Group 3 PBL Project Grade 10A This is our website written by Noht for other's to view and appreciate our work. Our PBL project started from an old project from our senior. And we have to improve it on our own but with the guides of our teacher, Miss Wassaporn.",
  verification: {
    google: "XkpoCf007JFR2eQ7U_9wBhBC64ds8752LjUEVBUA2w0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
