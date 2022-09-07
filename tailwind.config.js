const {
  getSpacings,
  getFontSizes,
  COLORS,
  SCREENS,
  BORDER_RADIUS,
  LINE_HEIGHTS,
  COMPONENTS_TO_ADD,
} = require('./styles/theme/tailwindTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      'good-sans': ['Good Sans', 'sans-serif'],
    },
    spacing: getSpacings(),
    fontSize: getFontSizes(),
    screens: SCREENS,
    lineHeight: LINE_HEIGHTS,
    borderRadius: BORDER_RADIUS,
    extend: {
      colors: COLORS,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents(COMPONENTS_TO_ADD);
    },
  ],
};
