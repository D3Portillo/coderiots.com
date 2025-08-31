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
            <h1 className="text-5xl max-w-3xl mx-auto md:text-7xl font-black mb-6">
              CHANGE YOUR LIFE THROUGH CODE
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join high-stake hackathons where you learn to code while audiences
              back you with crypto. Make skill-building as thrilling to watch as
              a life-changing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="https://tally.so/r/3E2QlA"
                target="_blank"
                className="bg-riot-red hover:bg-riot-red/80 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
              >
                Request Demo
              </Link>
              <Link
                href="https://t.me/d3portillo"
                target="_blank"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="pt-20 pb-40 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Three simple steps to transform your life through competitive
              learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-black/50 rounded-2xl border border-white/10">
              <div className="w-16 h-16 border-2 border-black bg-gradient-to-bl from-riot-red to-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Join a Hackathon
              </h3>
              <p className="text-white/70 leading-relaxed">
                Register for short, high-energy hackathons designed for all
                skill levels. Each event focuses on practical coding challenges
                and English communication.
              </p>
            </div>

            <div className="text-center p-8 bg-black/50 rounded-2xl border border-white/10">
              <div className="w-16 h-16 border-2 border-black bg-gradient-to-bl from-riot-yellow to-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Learn & Compete
              </h3>
              <p className="text-white/70 leading-relaxed">
                Build real projects while improving your English and coding
                skills. Audiences watch your progress and can back promising
                participants.
              </p>
            </div>

            <div className="text-center p-8 bg-black/50 rounded-2xl border border-white/10">
              <div className="w-16 h-16 border-2 border-black bg-gradient-to-bl from-riot-green to-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Earn & Grow
              </h3>
              <p className="text-white/70 leading-relaxed">
                Win prize money, get funded by supporters, and unlock career
                opportunities. Top performers join our exclusive developer
                network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Layer */}
      <section id="competition" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                The <span className="text-riot-yellow">Crypto</span>
                <br />
                Competition Layer
              </h2>
              <p className="text-xl text-white mb-8 leading-relaxed">
                This isn't just learning—it's entertainment. Audiences invest in
                participants they believe in, sharing in their success and
                creating a thrilling spectator experience.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-riot-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-riot-yellow my-0.5">
                      Live Audience Backing
                    </h3>
                    <p className="text-white/70">
                      Spectators can invest crypto in participants during live
                      events, boosting their potential rewards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-riot-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-riot-green my-0.5">
                      Shared Success
                    </h3>
                    <p className="text-white/70">
                      When you win, your backers win too. It's a community
                      investment in human potential.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white my-0.5">
                      High-Stakes Drama
                    </h3>
                    <p className="text-white/70">
                      Real money, real skills, real lives changing. Every
                      hackathon is an event worth watching.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 p-9 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Event Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-lg">
                  <span className="text-white/80">Active Participants</span>
                  <span className="text-white font-medium text-xl">1,200</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-lg">
                  <span className="text-white/80">Total Backing Pool</span>
                  <span className="text-riot-yellow underline font-bold text-xl">
                    $10,000
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-lg">
                  <span className="text-white/80">Avg. Live Viewers</span>
                  <span className="text-white font-medium text-xl">530</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-lg">
                  <span className="text-white/80">Next Event</span>
                  <span className="text-white font-medium text-xl">
                    Sept. 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Social Proof */}
      <section
        id="community"
        className="border-t border-white/25 pt-32 pb-20 bg-black"
      >
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-riot-red via-riot-yellow to-riot-green p-1 rounded-2xl max-w-md mx-auto animate-gradient bg-[length:200%_100%]">
            <style>{`
                @keyframes gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                  animation: gradient 3s ease-in-out infinite;
                }
              `}</style>
            <div className="bg-black p-10 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-white mb-1">
                Ready to back a winner?
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Hackathon bids are coming soon.
              </p>
              <Link
                href="https://tally.so/r/3E2QlA"
                target="_blank"
                className="bg-riot-red hover:bg-riot-red/80 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors w-full"
              >
                Request Demo
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
                <strong className="font-semibold">CodeWarriors:</strong>{" "}
                Changing lives through high-stakes hackathons funded by crypto
                competition. Join the revolution of skill-building
                entertainment.
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
                  How It Works
                </a>
                <a
                  href="https://tally.so/r/3E2QlA"
                  target="_blank"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Request Demo
                </a>

                <a
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Prizes
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
                  Developer Network
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
              <span>© 2025 Code Riots. All rights reserved.</span>

              <span className="mx-1">|</span>

              <a
                href="/privacy"
                className="hover:text-white transition-colors ml-1"
              >
                Privacy Policy
              </a>

              <span className="mx-1">|</span>

              <a
                href="/terms"
                className="hover:text-white transition-colors ml-1"
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
