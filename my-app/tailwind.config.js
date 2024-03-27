/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        xx: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
        xxx: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        cc: "0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)",
        ccc: "0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.3)",
        cccc: "0px 1px 4px rgba(0, 0, 0, 0.16)",
      },

      screens: {
        bnb_sm: { max: "743px" },
        bnb_md: { min: "744px", max: "949px" },
        bnb_sm_md: { max: "949px" },
        bnb_lg: { min: "950px", max: "1127px" },
        bnb_md_lg: { min: "744px", max: "1127px" },
        bnb_xl: { min: "1128px" },
        bnb_md_xl: { min: "744px" },
        bnb_lg_xl: { min: "950px" },

        bnb_xl_2xl: { min: "1128px", max: "1640px" },
        bnb_3xl: { min: "1641px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
