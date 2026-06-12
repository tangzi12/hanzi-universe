import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#132023",
        pine: "#0f766e",
        reef: "#0ea5a8",
        mist: "#edf8f6",
        cloud: "#f7faf9",
        ambercare: "#f6b94b"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(19, 32, 35, 0.10)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
