import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161616",
        paper: "#faf9f6",
        line: "#e6e0d4",
        mint: "#1f8f7a",
        coral: "#d95f43",
        brass: "#c5973a"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(35, 31, 27, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
