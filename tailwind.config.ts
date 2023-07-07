import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: { sans: ['"Public Sans"', ...fontFamily.sans] },
      colors: {
        text: "rgba(var(--text), <alpha-value>)",
        background: "rgba(var(--background), <alpha-value>)",
        border: "rgba(var(--border), <alpha-value>)",
        muted: {
          DEFAULT: "rgba(var(--muted), <alpha-value>)",
          text: "rgba(var(--muted-text), <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgba(var(--primary), <alpha-value>)",
          text: "rgba(var(--primary-text), <alpha-value>)",
        },
      },
    },
  },
};
