import Image from "next/image"

import Link from "next/link"
import asset_logo from "@/assets/logo.png"
import Navigation from "./Navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-40 pb-16">
            <h1 className="text-5xl uppercase max-w-3xl mx-auto md:text-7xl font-black mb-6">
              Bet on Brains.
              <br />
              Watch the Clash
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Live hackathons with commentary — degens back challengers, skills
              clash on-chain.
            </p>
            <div className="grid sm:inline-flex gap-4 mx-auto">
              <Link
                href="https://tally.so/r/3E2QlA"
                target="_blank"
                className="bg-riot-red hover:bg-riot-red/80 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
              >
                Join the Waitlist
              </Link>
              <Link
                href="https://t.me/d3portillo"
                target="_blank"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all"
              >
                Run a Hackathon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 [&_a]:outline-none bg-gray-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <figure className="mr-3 invert w-12">
                  <Image src={asset_logo} alt="" />
                </figure>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                <strong className="font-semibold">Code Riots:</strong> Changing
                lives through high-stakes hackathons funded by crypto degens.
              </p>
              <div className="flex [&_a]:underline [&_a]:underline-offset-4 space-x-4">
                <a
                  href="https://twitter.com/0xCodeRiots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-riot-yellow transition-colors"
                >
                  Twitter/X
                </a>

                <a
                  href="https://t.me/+zsYD4JmLa8U5ZDRh"
                  className="text-white/70 hover:text-riot-yellow transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  How it Works
                </a>
                <a
                  href="https://tally.so/r/3E2QlA"
                  target="_blank"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Join the Waitlist
                </a>

                <a
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Run a Hackathon
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Community</h3>
              <div className="space-y-2">
                <a
                  href="https://t.me/+zsYD4JmLa8U5ZDRh"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Developer Chat
                </a>
                <a
                  href="https://t.me/d3portillo"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Support
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/70">
              <span>© 2025 Code Riots. All rights reserved</span>

              <br className="sm:hidden" />
              <span className="mx-1.5 hidden sm:inline">|</span>

              <a
                href="/privacy"
                className="hover:text-white whitespace-nowrap transition-colors ml-1"
              >
                Privacy Policy
              </a>

              <span className="mx-1.5">|</span>

              <a
                href="/terms"
                className="hover:text-white whitespace-nowrap transition-colors ml-1"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
