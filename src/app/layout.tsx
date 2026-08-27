import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Providers } from "./providers"
import "../styles/index.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Loam Depot | Wholesale Loam, Sand, River Rock, Field Stone & Crushed Concrete - NH",
  description:
    "Loam Depot, family-owned and operated for 6 years, offers high-quality loam, sand, river rock, field stone, and crushed concrete at wholesale prices. Located in Newton, New Hampshire, we provide fast delivery and price matching. Contact us today for all your landscaping and construction material needs.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title:
      "Loam Depot | Wholesale Loam, Sand, River Rock, Field Stone & Crushed Concrete - NH",
    description:
      "Loam Depot, family-owned and operated for 6 years, offers high-quality loam, sand, river rock, field stone, and crushed concrete at wholesale prices. Located in Newton, New Hampshire, we provide fast delivery and price matching. Contact us today for all your landscaping and construction material needs.",
    url: "https://www.loamdepot.com/",
    images: ["https://www.loamdepot.com/images/about/loam_pile.jpg"],
  },
  twitter: {
    title:
      "Loam Depot | Wholesale Loam, Sand, River Rock, Field Stone & Crushed Concrete - NH",
    description:
      "Loam Depot, family-owned and operated for 6 years, offers high-quality loam, sand, river rock, field stone, and crushed concrete at wholesale prices. Located in Newton, New Hampshire, we provide fast delivery and price matching. Contact us today for all your landscaping and construction material needs.",
    images: ["https://www.loamdepot.com/images/about/loam_pile.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`dark:bg-black bg-[#FCFCFC] ${inter.className}`}>
        <Providers>{children}</Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6S16EXY3JL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6S16EXY3JL');
          `}
        </Script>
      </body>
    </html>
  )
}
