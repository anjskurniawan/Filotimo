module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
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
      },
    },
  },
  plugins: [],
};
