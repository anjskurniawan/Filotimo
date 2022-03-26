module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./about/**/*.{html,js}", "./contact/**/*.{html,js}", "./blog/**/*.{html,js}", "./services/**/*.{html,js}", "./portfolio/**/*.{html,js}", "./404.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        kuning: "#E5FF0A",
      },
      spacing: {
        100: "600px",
      },
      animation: {
        show: "show 2s linear",
        swipekiri: "swipekiri 1s ease-in alternate",
        swipeshow: "swipeshow 1s ease-in",
        "spin-slow": "spin 5s infinite linear",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        swipeshow: {
          "0%": { opacity: "0", transform: "translateX(-200px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        swipekiri: {
          from: { margin: "left(250px)", width: "300px" },
          "75%": { margin: "left(100px)", width: "150%" },
          to: { margin: "left(0)", width: "100%;" },
        },
      },
    },
  },
  plugins: [],
};
