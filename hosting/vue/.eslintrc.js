module.exports = {
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    parserOptions: {
      parser: "babel-eslint",
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
    plugins: [
    ],
    ignorePatterns: [],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "off",
      "prettier/prettier": ["warn", { endOfLine: "auto" }],
    },
  };
