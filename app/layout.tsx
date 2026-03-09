import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pankaj Singh Jethi | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in modern web technologies. Building performant, elegant digital experiences with React, Next.js, Node.js and more.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Pankaj Singh Jethi" }],
  icons: {
    icon: "/fav.png",
  },
  openGraph: {
    title: "Pankaj Singh Jethi | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
