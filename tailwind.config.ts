// import type { Config } from "tailwindcss";
// const svgToDataUri = require("mini-svg-data-uri");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");
// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

// module.exports = {
//   mode: "jit",
//   darkMode: "class",

//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       spacing: {
//         "9/16": "56.25%",
//         0.75: "0.1875rem",
//         "content-sm": "calc(100vh - 4.5rem)",
//         content: "calc(100vh - 4rem)",
//       },
//       lineHeight: {
//         11: "2.75rem",
//         12: "3rem",
//         13: "3.25rem",
//         14: "3.5rem",
//       },
//       letterSpacing: {
//         tightest: "-.075em",
//       },
//       fontSize: {
//         "8.5xl": "7rem",
//       },
//       fontFamily: {
//         sans: ["Mukta", ...defaultTheme.fontFamily.sans],
//       },
//       gradientColorStops: {
//         "gradient-1-start": "#F20089",
//         "gradient-1-end": "#D100D1",
//         "gradient-2-start": "#D100D1",
//         "gradient-2-end": "#A100F2",
//         "gradient-3-start": "#A100F2",
//         "gradient-3-end": "#2D00F7",
//       },
//       colors: {
//         primary: {
//           100: "#FDD1D9",
//           200: "#FBA4BC",
//           300: "#F575A5",
//           400: "#EB519B",
//           500: "#DE1D8D",
//           600: "#BE1588",
//           700: "#9F0E7F",
//           800: "#800972",
//           900: "#6A0568",
//         },
//         success: {
//           100: "#E4FCDB",
//           200: "#C3FAB9",
//           300: "#99F193",
//           400: "#74E377",
//           500: "#49D159",
//           600: "#35B34F",
//           700: "#249647",
//           800: "#17793D",
//           900: "#0E6437",
//         },
//         info: {
//           100: "#CCFCFF",
//           200: "#99F2FF",
//           300: "#66E2FF",
//           400: "#3FCEFF",
//           500: "#00AEFF",
//           600: "#0087DB",
//           700: "#0065B7",
//           800: "#004793",
//           900: "#00337A",
//         },
//         warning: {
//           100: "#FEF1CF",
//           200: "#FDE09F",
//           300: "#FBC96F",
//           400: "#F8B24B",
//           500: "#F48E11",
//           600: "#D1700C",
//           700: "#AF5508",
//           800: "#8D3D05",
//           900: "#752D03",
//         },
//         danger: {
//           100: "#FFDCD3",
//           200: "#FFB1A8",
//           300: "#FF7D7C",
//           400: "#FF5C6A",
//           500: "#FF264D",
//           600: "#DB1B50",
//           700: "#B7134F",
//           800: "#930C4A",
//           900: "#7A0747",
//         },
//         "spotify-green": "#1DB954",
//         green: colors.emerald,
//         yellow: colors.amber,
//         purple: colors.violet,
//       },
//       typography: (theme) => ({
//         DEFAULT: {
//           css: {
//             color: theme("colors.gray.700"),
//             a: {
//               color: theme("colors.gray.700"),
//               "&:hover": {
//                 color: theme("colors.gray.700"),
//               },
//               code: { color: theme("colors.primary.400") },
//             },
//             h1: {
//               fontWeight: "700",
//               letterSpacing: theme("letterSpacing.tight"),
//               color: theme("colors.gray.900"),
//             },
//             h2: {
//               fontWeight: "700",
//               letterSpacing: theme("letterSpacing.tight"),
//               color: theme("colors.gray.900"),
//             },
//             h3: {
//               fontWeight: "600",
//               color: theme("colors.gray.900"),
//             },
//             "h4,h5,h6": {
//               color: theme("colors.gray.900"),
//             },
//             code: {
//               color: theme("colors.green.500"),
//               backgroundColor: theme("colors.gray.100"),
//               paddingLeft: "4px",
//               paddingRight: "4px",
//               paddingTop: "2px",
//               paddingBottom: "2px",
//               borderRadius: "0.25rem",
//             },
//             "code:before": {
//               content: "none",
//             },
//             "code:after": {
//               content: "none",
//             },
//             hr: { borderColor: theme("colors.gray.200") },
//             "ol li:before": {
//               fontWeight: "600",
//               color: theme("colors.gray.500"),
//             },
//             "ul li:before": {
//               backgroundColor: theme("colors.gray.500"),
//             },
//             "ul li > :last-child": {
//               margin: 0,
//             },
//             "ul li > :first-child": {
//               margin: 0,
//             },
//             strong: { color: theme("colors.gray.600") },
//             blockquote: {
//               color: theme("colors.gray.900"),
//               borderLeftColor: theme("colors.gray.200"),
//             },
//           },
//         },
//         dark: {
//           css: {
//             color: theme("colors.gray.300"),
//             a: {
//               color: theme("colors.gray.300"),
//               "&:hover": {
//                 color: theme("colors.gray.300"),
//               },
//               code: { color: theme("colors.primary.400") },
//             },
//             h1: {
//               fontWeight: "700",
//               letterSpacing: theme("letterSpacing.tight"),
//               color: theme("colors.gray.100"),
//             },
//             h2: {
//               fontWeight: "700",
//               letterSpacing: theme("letterSpacing.tight"),
//               color: theme("colors.gray.100"),
//             },
//             h3: {
//               fontWeight: "600",
//               color: theme("colors.gray.100"),
//             },
//             "h4,h5,h6": {
//               color: theme("colors.gray.100"),
//             },
//             code: {
//               backgroundColor: theme("colors.gray.800"),
//             },
//             hr: { borderColor: theme("colors.gray.700") },
//             "ol li:before": {
//               fontWeight: "600",
//               color: theme("colors.gray.400"),
//             },
//             "ul li:before": {
//               backgroundColor: theme("colors.gray.400"),
//             },
//             "ul li > :last-child": {
//               margin: 0,
//             },
//             "ul li > :first-child": {
//               margin: 0,
//             },
//             strong: { color: theme("colors.gray.100") },
//             thead: {
//               color: theme("colors.gray.100"),
//             },
//             tbody: {
//               tr: {
//                 borderBottomColor: theme("colors.gray.700"),
//               },
//             },
//             blockquote: {
//               color: theme("colors.gray.100"),
//               borderLeftColor: theme("colors.gray.700"),
//             },
//           },
//         },
//       }),
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [
//     require("@tailwindcss/forms"),
//     require("tailwindcss/typography"),
//     require("tailwind-scrollbar")({ nocompatible: true }),
//     addVariablesForColors,
//     function ({ matchUtilities, theme }: any) {
//       matchUtilities(
//         {
//           "bg-grid": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//           "bg-grid-small": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
//             )}")`,
//           }),
//           "bg-dot": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },
//     function ({ matchUtilities, theme }: any) {
//       matchUtilities(
//         {
//           "bg-dot-thick": (value: any) => ({
//             backgroundImage: `url("${svgToDataUri(
//               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
//             )}")`,
//           }),
//         },
//         { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
//       );
//     },
//   ],
// };
// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
// // export default config;

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./layouts/**/*.tsx",
    "./lib/**/*.ts",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
        0.75: "0.1875rem",
        "content-sm": "calc(100vh - 4.5rem)",
        content: "calc(100vh - 4rem)",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      letterSpacing: {
        tightest: "-.075em",
      },
      fontSize: {
        "8.5xl": "7rem",
      },
      fontFamily: {
        sans: ["Mukta", ...defaultTheme.fontFamily.sans],
      },
      gradientColorStops: {
        "gradient-1-start": "#F20089",
        "gradient-1-end": "#D100D1",
        "gradient-2-start": "#D100D1",
        "gradient-2-end": "#A100F2",
        "gradient-3-start": "#A100F2",
        "gradient-3-end": "#2D00F7",
      },
      colors: {
        primary: {
          100: "#FDD1D9",
          200: "#FBA4BC",
          300: "#F575A5",
          400: "#EB519B",
          500: "#DE1D8D",
          600: "#BE1588",
          700: "#9F0E7F",
          800: "#800972",
          900: "#6A0568",
        },
        success: {
          100: "#E4FCDB",
          200: "#C3FAB9",
          300: "#99F193",
          400: "#74E377",
          500: "#49D159",
          600: "#35B34F",
          700: "#249647",
          800: "#17793D",
          900: "#0E6437",
        },
        info: {
          100: "#CCFCFF",
          200: "#99F2FF",
          300: "#66E2FF",
          400: "#3FCEFF",
          500: "#00AEFF",
          600: "#0087DB",
          700: "#0065B7",
          800: "#004793",
          900: "#00337A",
        },
        warning: {
          100: "#FEF1CF",
          200: "#FDE09F",
          300: "#FBC96F",
          400: "#F8B24B",
          500: "#F48E11",
          600: "#D1700C",
          700: "#AF5508",
          800: "#8D3D05",
          900: "#752D03",
        },
        danger: {
          100: "#FFDCD3",
          200: "#FFB1A8",
          300: "#FF7D7C",
          400: "#FF5C6A",
          500: "#FF264D",
          600: "#DB1B50",
          700: "#B7134F",
          800: "#930C4A",
          900: "#7A0747",
        },
        "spotify-green": "#1DB954",
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.gray.700"),
              "&:hover": {
                color: theme("colors.gray.700"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            code: {
              color: theme("colors.green.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.500"),
            },
            "ul li > :last-child": {
              margin: 0,
            },
            "ul li > :first-child": {
              margin: 0,
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.gray.300"),
              "&:hover": {
                color: theme("colors.gray.300"),
              },
              code: { color: theme("colors.primary.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            "ul li > :last-child": {
              margin: 0,
            },
            "ul li > :first-child": {
              margin: 0,
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
