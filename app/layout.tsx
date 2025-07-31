import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Instrument Sans from Google Fonts
const instrumentSans = localFont({
  src: "../public/fonts/InstrumentSans-VariableFont_wdth,wght.ttf",
  variable: "--font-instrument-sans",
  display: "swap",
});

// Host Grotesk from local fonts
const hostGrotesk = localFont({
  src: "../public/fonts/HostGrotesk-VariableFont_wght.ttf",
  variable: "--font-host-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital6",
  description: "Email marketing solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${hostGrotesk.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
