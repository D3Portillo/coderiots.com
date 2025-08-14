import type { Metadata } from "next"
import "./globals.css"

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
}
