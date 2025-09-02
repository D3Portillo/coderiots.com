import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "./Navigation"

const inter = Inter({
  subsets: [],
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title:
    "Changing lives through high-stakes hackathons funded by crypto degens",
  description:
    "Code Riots turns hackathons into high-stakes coding battles with live commentary, on-chain bets, and degen hype. Back your favorite challengers, watch skills clash, and earn while builders fight for glory.",
  keywords: "hackathon, coding, crypto, blockchain, competition, programming",
  twitter: {
    card: "summary_large_image",
    site: "@0xCodeRiots",
    creator: "@0xCodeRiots",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen antialiased bg-black text-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
