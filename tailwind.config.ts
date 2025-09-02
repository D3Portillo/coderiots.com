import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "riot-red": "#E10600",
        "riot-yellow": "#FFD700",
        "riot-green": "#00FF00",
      },
    },
  },
  plugins: [],
}
export default config
