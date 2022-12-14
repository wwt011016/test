module.exports = {
  root: true,
  env: {
    node: true,
  },
  // vue语法检查
  // extends: ['plugin:vue/essential', '@vue/standard'],
  extends: ["plugin:vue/essential"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
