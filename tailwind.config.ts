import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "my-pri-color": '#3690FF',
        "my-pri-text-color": '#03372A',
        "my-sec-text-color": '#61626D',
      },
      // backgroundImage: {
      //   'home-hero': `url(/hero-bg.png)`,
      // }
    },
  },
  plugins: [],
})
export default config
