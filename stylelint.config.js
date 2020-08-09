module.exports = {
  extends: ["stylelint-config-recommended-scss"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "length-zero-no-unit": true,
    "max-nesting-depth": 3,
    "number-leading-zero": "always",
  },
};
