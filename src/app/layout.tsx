import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { GrainOverlay } from "@/components/background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pdscomm.com"),
  title: {
    default:
      "PDSCOMM — AI Software Brokerage for Institutional Buyers",
    template: "%s · PDSCOMM",
  },
  description:
    "PDSCOMM connects government and enterprise buyers with qualified AI software providers—supporting sourcing, evaluation, and due diligence from requirements to shortlist.",
  keywords: [
    "AI software brokerage",
    "AI procurement",
    "AI vendor sourcing",
    "enterprise AI",
    "government AI",
    "due diligence",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    siteName: "PDSCOMM",
    locale: "en_US",
    type: "website",
    title: "PDSCOMM — AI Software Brokerage for Institutional Buyers",
    description:
      "Structured AI sourcing for government and enterprise buyers. NDA-first, procurement-ready.",
    images: [
      {
        url: "/og.png",
        width: 1376,
        height: 768,
        alt: "PDSCOMM — institutional AI software brokerage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDSCOMM — AI Software Brokerage for Institutional Buyers",
    description:
      "Structured AI sourcing for government and enterprise buyers.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#121417",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "PDSCOMM",
        url: "https://pdscomm.com",
        logo: "https://pdscomm.com/icon.png",
        description:
          "PDSCOMM connects government and enterprise buyers with qualified AI software providers—supporting sourcing, evaluation, and due diligence from requirements to shortlist.",
        areaServed: ["California", "Texas", "Dubai", "Singapore", "China"],
      },
      {
        "@type": "WebSite",
        name: "PDSCOMM",
        url: "https://pdscomm.com",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-charcoal font-sans text-stone">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-brass focus:px-4 focus:py-2 focus:text-sm focus:text-charcoal"
          >
            Skip to content
          </a>
          <SiteHeader />
          <GrainOverlay />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}