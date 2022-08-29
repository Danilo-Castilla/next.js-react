module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: [
        "plugin:prettier/recommended",
        "next",
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        semi: ["error", "always"],
    },
    plugins: [
        '@typescript-eslint'
    ],
};