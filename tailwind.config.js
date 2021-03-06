module.exports = {
  theme: {
    // Prose styling
    typography: {
      default: {
        css: {
          pre: false,
          code: false,
          "pre code": false,
          "li::before": false,
        },
      },
    },
    // ----------------------
    blue: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#356AFD",
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3A8A",
    },
    yellow: {
      50: "#FFFBEB",
      100: "#FEF3C7",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B",
      600: "#D97706",
      700: "#B45309",
      800: "#92400E",
      900: "#78350F",
    },

    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#0E171D",
    },
    letterSpacing: {
      tightest: "-.15em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    require("windicss/plugin/forms"),
    require("@tailwindcss/typography"),
  ],
};
