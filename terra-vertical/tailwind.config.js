module.exports = {
  darkMode: "class", // importante para controle manual
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // força o tema claro
  },
};
