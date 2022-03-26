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
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0,0,0.2,0) infinite",
        "blink-slow": "blink 3s linear infinite",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
