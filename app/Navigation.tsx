import Image from "next/image"

import asset_logo_full from "@/assets/logo-full.png"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/95 to-black/55 backdrop-blur border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex mr-3 shrink-0 invert items-center">
            <Link href="/#">
              <figure>
                <Image
                  placeholder="blur"
                  src={asset_logo_full}
                  alt=""
                  className="w-32"
                />
              </figure>
            </Link>
          </div>

          <div className="flex-grow" />

          <a
            href="https://tally.so/r/3E2QlA?persona=%F0%9F%8F%9F%EF%B8%8F%20Run%20a%20hackathon%20"
            target="_blank"
            className="font-semibold mr-8 hidden sm:inline cursor-pointer hover:underline underline-offset-4"
          >
            Run a Hackathon
          </a>

          <Link
            href="https://tally.so/r/3E2QlA"
            target="_blank"
            className="bg-riot-red whitespace-nowrap hover:bg-riot-red/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            <span className="sm:hidden">Join Waitlist</span>
            <span className="hidden sm:inline">Join the Waitlist</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
