/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"]
      },
      colors: {
        mobile: "#eeeeee",
        cine: "#B2B3B5",
        modal: "#FAF8FC",
        border: "#656565",
        button: "#003B65",
        ticket: "#15222B",
        horizontal: "#010F19",
        dropdown: "#E9E9E9",
        submit: "#03AC50",
        add: "#f0bd2d",
        products: "#fff6dd",
        popular: "#f5f5f5",
        coins: "#bafb02",
        categories: "#333333",
        order: "#fff8d5",
        delivery: "#666666",
        added: "#079004",
        pick: "#4B575F",
        list: "#222222",
        sub: "#D9D9D9",
        cart: "#444444",
        select: "#f9f9f9",
        search: "#013962",
        quick: "#9c9c9c",
        dash: "#E1EDF5",
        table: "#f2f2f2"
      },
      lineHeight: {
        loyalty: "120%",
        shop: "140%",
        product: "140.62%"
      },
      letterSpacing: {
        loyal: "-0.01em"
      }
    }
  },
  plugins: []
};
