import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Navigation from "@/components/layout/Navigation";

import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Hanna Sauquillo | Portfolio",
  description: "Accountant portfolio showcasing professional work and expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ErrorReporter />
        <Navigation />
        {children}
  <VisualEditsMessenger />
</body>
    </html>
  );
}
