// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // add custom color here
        'vscode-bg': '#1e1e1e',
        't-bg':'#D9D9E9',
        // map over all Tailwind's built-in colors
        ...Object.fromEntries(
          Object.entries(colors).flatMap(([color, values]) =>
            typeof values === 'object'
              ? Object.entries(values).map(([key, value]) => [
                  `${color}-${key}`,
                  value,
                ])
              : [[color, values]]
          )
        ),
      },
    },
  },
  variants: {},
  plugins: [],
};