import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      neutral: colors.neutral,
      primary: colors.blue,
    },
    fontSize: {
      xs: [
        "clamp(0.7813rem, 0.7747rem + 0.0326vi, 0.8rem);",
        { lineHeight: "1.4" },
      ],
      sm: [
        "clamp(0.9375rem, 0.9158rem + 0.1087vi, 1rem);",
        { lineHeight: "1.4" },
      ],
      base: [
        "clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem);",
        { lineHeight: "1.4" },
      ],
      lg: [
        "clamp(1.35rem, 1.2761rem + 0.3696vi, 1.5625rem);",
        { lineHeight: "1.4" },
      ],
      xl: [
        "clamp(1.62rem, 1.5041rem + 0.5793vi, 1.9531rem);",
        { lineHeight: "1.4" },
      ],
      "2xl": [
        "clamp(1.944rem, 1.771rem + 0.8651vi, 2.4414rem);",
        { lineHeight: "1.4" },
      ],
      "3xl": [
        "clamp(2.3328rem, 2.0827rem + 1.2504vi, 3.0518rem);",
        { lineHeight: "1.4" },
      ],
      "4xl": [
        "clamp(2.7994rem, 2.4462rem + 1.7658vi, 3.8147rem);",
        { lineHeight: "1.4" },
      ],
      "5xl": [
        "clamp(3.3592rem, 2.8691rem + 2.4507vi, 4.7684rem);",
        { lineHeight: "1" },
      ],
      "6xl": [
        "clamp(4.0311rem, 3.36rem + 3.3555vi, 5.9605rem);",
        { lineHeight: "1" },
      ],
      "7xl": [
        "clamp(4.8373rem, 3.9283rem + 4.5448vi, 7.4506rem);",
        { lineHeight: "1" },
      ],
      "8xl": [
        "clamp(5.8048rem, 4.5844rem + 6.1017vi, 9.3132rem);",
        { lineHeight: "1" },
      ],
      "9xl": [
        "clamp(6.9657rem, 5.3393rem + 8.1319vi, 11.6415rem);",
        { lineHeight: "1" },
      ],
    },
    spacing: {
      0.5: "clamp(0.125rem, 0.1033rem + 0.1087vi, 0.1875rem);",
      1: "clamp(0.3125rem, 0.3125rem + 0vi, 0.3125rem);",
      1.5: "clamp(0.4375rem, 0.4158rem + 0.1087vi, 0.5rem);",
      2: "clamp(0.5625rem, 0.5408rem + 0.1087vi, 0.625rem);",
      2.5: "clamp(0.6875rem, 0.644rem + 0.2174vi, 0.8125rem);",
      3: "clamp(0.875rem, 0.8533rem + 0.1087vi, 0.9375rem);",
      3.5: "clamp(1rem, 0.9565rem + 0.2174vi, 1.125rem);",
      4: "clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem);",
      5: "clamp(1.4375rem, 1.394rem + 0.2174vi, 1.5625rem);",
      6: "clamp(1.6875rem, 1.6223rem + 0.3261vi, 1.875rem);",
      7: "clamp(2rem, 1.9348rem + 0.3261vi, 2.1875rem);",
      8: "clamp(2.25rem, 2.163rem + 0.4348vi, 2.5rem);",
      9: "clamp(2.5625rem, 2.4755rem + 0.4348vi, 2.8125rem);",
      10: "clamp(2.8125rem, 2.7038rem + 0.5435vi, 3.125rem);",
      11: "clamp(3.125rem, 3.0163rem + 0.5435vi, 3.4375rem);",
      12: "clamp(3.375rem, 3.2446rem + 0.6522vi, 3.75rem);",
      14: "clamp(3.9375rem, 3.7853rem + 0.7609vi, 4.375rem);",
      16: "clamp(4.5rem, 4.3261rem + 0.8696vi, 5rem);",
      20: "clamp(5.625rem, 5.4076rem + 1.087vi, 6.25rem);",
      24: "clamp(6.75rem, 6.4891rem + 1.3043vi, 7.5rem);",
      28: "clamp(7.875rem, 7.5707rem + 1.5217vi, 8.75rem);",
      32: "clamp(9rem, 8.6522rem + 1.7391vi, 10rem);",
      36: "clamp(11.25rem, 10.8152rem + 2.1739vi, 12.5rem);",
      40: "clamp(12.375rem, 11.8967rem + 2.3913vi, 13.75rem);",
      44: "clamp(13.5rem, 12.9783rem + 2.6087vi, 15rem);",
      48: "clamp(14.625rem, 14.0598rem + 2.8261vi, 16.25rem);",
      52: "clamp(10.125rem, 9.7337rem + 1.9565vi, 11.25rem);",
      56: "clamp(15.75rem, 15.1413rem + 3.0435vi, 17.5rem);",
      60: "clamp(16.875rem, 16.2228rem + 3.2609vi, 18.75rem);",
      64: "clamp(18rem, 17.3043rem + 3.4783vi, 20rem);",
      72: "clamp(20.25rem, 19.4674rem + 3.913vi, 22.5rem);",
      80: "clamp(22.5rem, 21.6304rem + 4.3478vi, 25rem);",
      96: "clamp(27rem, 25.9565rem + 5.2174vi, 30rem);",
    },
    extend: {
      lineHeight: {
        base: "1.4",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
