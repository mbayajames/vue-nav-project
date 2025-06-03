module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
