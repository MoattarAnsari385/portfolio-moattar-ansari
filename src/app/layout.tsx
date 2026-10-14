import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moattar Ansari — Agentic AI Engineer & Full-Stack Developer",
  description:
    "I'm a Full-Stack Developer growing into an Agentic AI Engineer — building intelligent digital products, autonomous AI systems, and modern SaaS platforms.",
  keywords: [
    "Moattar Ansari",
    "Agentic AI Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "OpenAI",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: "Moattar Ansari" }],
  creator: "Moattar Ansari",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Moattar Ansari — Agentic AI Engineer & Full-Stack Developer",
    description:
      "Building intelligent digital products, autonomous AI systems, and modern SaaS platforms.",
    siteName: "Moattar Ansari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moattar Ansari — Agentic AI Engineer",
    description:
      "Building intelligent digital products, autonomous AI systems, and modern SaaS platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
