/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "interface",
    "(?=content|api)",
    "context/",
    "mock/",
    "config",
    "utils/",
    "hooks/",
    "(components/|./index)",
    ".svg",
    "^../(.*)$",
    "(?=./styles.module.scss)",
  ],
  importOrderSeparation: true,
};

export default config;
