import { type ReactNode } from "react";
import { AxiomWebVitals } from "next-axiom";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@erp/ui/containers/theme-provider";
import { defaultUrl } from "@erp/utils";

import "@erp/ui/globals.css";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Inventory Management System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <AxiomWebVitals />

      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
