module.exports = {
  theme: {
    extend: {
      flex: {
        "l-24": "0 0 6rem"
      },
      fontFamily: {
        serif: ["Arvo"],
        mono: ["Source Code Pro"]
      },
      padding: {
        "1/2": "0.125rem"
      },
      colors: {
        background: "var(--color-background)",
        "background-alt": "var(--color-background-alt)",
        "background-dark": "var(--color-background-dark)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        black: "var(--color-black)",
        red: "var(--color-red)",
        green: "var(--color-green)",
        yellow: "var(--color-yellow)",
        blue: "var(--color-blue)",
        magenta: "var(--color-magenta)",
        cyan: "var(--color-cyan)",
        white: "var(--color-white)"
      },
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" }
      }
    }
  }
};
