import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "./Navigation"

const inter = Inter({
  subsets: [],
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Code Riots - Changing lives through high-stakes hackathons",
  description:
    "Join Code Riots - the platform that changes lives through short, high-energy hackathons where participants learn English and coding, funded by crypto competition.",
  keywords:
    "hackathon, coding, English learning, crypto, blockchain, competition, programming",
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
