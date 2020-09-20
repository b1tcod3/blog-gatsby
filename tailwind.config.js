// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {},
  variants: {
  	fontSize:['responsive','hover'],
  	height:['responsive','hover'],
    weight:['responsive','hover'],
    scale:['responsive','hover'],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
