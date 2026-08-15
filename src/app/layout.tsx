import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "PDSCOMM — AI Brokerage for Procurement-Grade Decisions",
    template: "%s · PDSCOMM",
  },
  description:
    "PDSCOMM connects government and enterprise buyers with qualified AI software providers—supporting sourcing, evaluation, and due diligence from requirements to shortlist.",
  keywords: [
    "AI brokerage",
    "AI sourcing",
    "government AI procurement",
    "enterprise AI vendors",
    "technology due diligence",
  ],
  openGraph: {
    title: "PDSCOMM — AI Brokerage for Procurement-Grade Decisions",
    description:
      "Global AI software brokerage connecting institutional buyers with qualified technology providers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Background />
        <SmoothScroll>
          <Header />
          <main className="relative z-10 flex-1 pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
