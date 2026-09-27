import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteMotion } from "@/components/site-motion";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://taha-khan-amazon-growth.dogarrashid5.chatgpt.site"),
  title: { default: "Taha Khan | Amazon Brand Manager & PPC Specialist", template: "%s | Taha Khan" },
  description: "Taha Khan helps Amazon brands improve PPC efficiency, optimize listings, resolve account-health issues and scale across the US marketplace.",
  keywords: ["Amazon Brand Manager", "Amazon PPC Specialist", "Amazon Account Health", "Amazon Listing Optimization", "Amazon Consultant Pakistan"],
  alternates: { canonical: "/" },
  openGraph: { title: "Taha Khan | Amazon Brand Manager & PPC Specialist", description: "Amazon PPC, listing optimization and account-health support for brands focused on the US marketplace.", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SiteMotion />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
