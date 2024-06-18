import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:8080"),
  title: {
    default: "B2B - Test Task",
    template: '%s | B2B - Test Task'
  },
  description: "Next.js application to impress reviewer",
  openGraph: {
    title: "B2B - Test Task",
    description: "Next.js application to impress reviewer",
    type: "website",
    locale: "en_US",
    url: "http://localhost:8080",
    siteName: "b2b_test"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container py-8 mx-auto">{children}</body>
    </html>
  );
}
