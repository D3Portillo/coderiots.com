import Image from "next/image"

import asset_logo_full from "@/assets/logo-full.png"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex mr-3 shrink-0 invert items-center">
            <Link href="/#">
              <figure>
                <Image src={asset_logo_full} alt="" className="w-32" />
              </figure>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#how-it-works"
              className="text-white/80 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#competition"
              className="text-white/80 hover:text-white transition-colors"
            >
              Competition
            </a>
            <a
              href="#success"
              className="text-white/80 hover:text-white transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#community"
              className="text-white/80 hover:text-white transition-colors"
            >
              Community
            </a>
          </div>
          <Link
            href="https://tally.so/r/3E2QlA"
            target="_blank"
            className="bg-riot-red hover:bg-riot-red/80 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Request demo
          </Link>
        </div>
      </div>
    </nav>
  )
}
