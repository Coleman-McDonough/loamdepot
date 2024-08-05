"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"
import { Inter } from "next/font/google"
import "node_modules/react-modal-video/css/modal-video.css"
import "../styles/index.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        var gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-6S16EXY3JL';
        document.head.appendChild(gtagScript);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6S16EXY3JL');
      })();
    `,
          }}
        />

        <meta
          property="og:title"
          content="Loam Depot | Wholesale Loam, Sand, River Rock, Field Stone & Crushed Concrete - NH"
        />
        <meta
          property="og:description"
          content="Loam Depot, family-owned and operated for 6 years, offers high-quality loam, sand, river rock, field stone, and crushed concrete at wholesale prices. With locations in Newton and Sanbornville, New Hampshire, we provide fast delivery and price matching. Contact us today for all your landscaping and construction material needs."
        />
        <meta
          property="og:image"
          content="https://www.loamdepot.com/images/about/loam_pile.jpg"
        />
        <meta property="og:url" content="https://www.loamdepot.com/" />
        <meta
          name="twitter:title"
          content="Loam Depot | Wholesale Loam, Sand, River Rock, Field Stone & Crushed Concrete - NH"
        />
        <meta
          name="twitter:description"
          content="Loam Depot, family-owned and operated for 6 years, offers high-quality loam, sand, river rock, field stone, and crushed concrete at wholesale prices. With locations in Newton and Sanbornville, New Hampshire, we provide fast delivery and price matching. Contact us today for all your landscaping and construction material needs."
        />
        <meta
          name="twitter:url"
          content="https://www.loamdepot.com/images/about/loam_pile.jpg"
        />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>

      <body className={`dark:bg-black bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}

import { Providers } from "./providers"
import Script from "next/script"
