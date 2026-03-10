import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Kuruba Hemanth Kishore | Creative AI Developer",
  description: "Portfolio of Kuruba Hemanth Kishore - Software Developer & AI Enthusiast. Building scalable web apps, AI solutions, and impactful digital experiences.",
  keywords: "Software Developer, AI Enthusiast, Web Developer, Machine Learning, Python, React, Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans bg-black text-gray-100 antialiased selection:bg-brand-primary/30 selection:text-brand-primary`}>
        <div className="fixed inset-0 min-h-screen z-[-1] bg-black">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-secondary/20 blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-brand-primary/20 blur-[140px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
