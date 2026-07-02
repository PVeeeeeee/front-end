/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        amarelo: "#EBBA20",
        vermelho: {
          100: "#930A0A",
          200: "#D52626",
        },
        verde: "#2B8722",
        laranja: "#C45A1A",
        azul: "#124993",
        roxo: "#881293",
        branco: {
          100: "#FFFFF2",
          200: "#F6F6F6",
        },
        cinza: {
          100: "#EEEEEE", 
          200: "#D9D9D9", 
          300: "#333333"
        },
        preto: "#1E1E1E"
      }
    },
  },
  plugins: [],
}

