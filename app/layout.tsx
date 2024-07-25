import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import icon from '@/app/icon.svg'
import apple from '@/app/apple-icon.png'

export const metadata: Metadata = {
  title: "Weather App",
  icons: { icon: icon.src, apple: apple.src },
  description:
    "Get real-time weather updates for any location with my modern and responsive Weather App. Built with TypeScript, Next.js, and Tailwind CSS, and powered by the OpenWeatherMap API, my app delivers accurate and up-to-date weather information at your fingertips.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
