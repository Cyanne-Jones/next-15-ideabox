import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"], // Target specific files
    rules: {
      "no-console": "warn", // Warn on console usage
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn"
      // "react/prop-types": "off", // Disable React prop-types rule (useful with TypeScript)
    },
  }
];

export default eslintConfig;
